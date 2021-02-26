import { mediaModel } from './media.model';
import { init } from '@rematch/core';

describe('#mediaModel', () => {
  describe('#reducers', () => {
    const initStore = (mediaService = {}) => {
      const model = mediaModel(mediaService);
      return init({
        models: { media: model }
      });
    };

    describe('#addMedia', () => {
      it('should add a new media in the media list', () => {
        const store = initStore();

        const media = {
          id: 1,
          url: 'https://www.vimeo.com/1234'
        };

        store.dispatch.media.addMedia(media);

        const state = store.getState().media;
        expect(state.list.data).toEqual([media]);
      });

      it('should remove doublon media', () => {
        const store = initStore();

        const media = {
          id: 1,
          url: 'https://www.vimeo.com/1234'
        };

        store.dispatch.media.addMedia(media);
        store.dispatch.media.addMedia(media); // to add the same media

        const state = store.getState().media;
        expect(state.list.data).toEqual([media]);
      });
    });
  });

  describe('#effects', () => {
    describe('#createMedia', () => {
      it('should set the flag isCreating to true', async () => {
        const mediaService = {
          createMedia: () => Promise.resolve()
        };

        const dispatch = {
          media: {
            creatingMedia: jest.fn(),
            addMedia: () => null
          }
        };

        await mediaModel(mediaService).effects(dispatch).createMedia();

        expect(dispatch.media.creatingMedia).toHaveBeenCalledTimes(1);
      });

      it('should call the creation method from the service', async () => {
        const media = {
          url: 'https://www.vimeo.com/video'
        };

        const mediaService = {
          createMedia: jest.fn(() => Promise.resolve())
        };

        const dispatch = {
          media: {
            creatingMedia: () => null,
            addMedia: () => null
          }
        };

        await mediaModel(mediaService).effects(dispatch).createMedia(media);

        expect(mediaService.createMedia).toHaveBeenCalledWith(media);
      });

      it('should add the created media to the list', async () => {
        const media = {
          url: 'https://www.vimeo.com/video'
        };

        const mediaService = {
          createMedia: () => Promise.resolve(media)
        };

        const dispatch = {
          media: {
            creatingMedia: () => null,
            addMedia: jest.fn()
          }
        };

        await mediaModel(mediaService).effects(dispatch).createMedia(media);

        expect(dispatch.media.addMedia).toHaveBeenCalledWith(media);
      });

      it('should display the error on a toast', async () => {
        const toast = {
          error: jest.fn()
        };
        const media = {
          url: 'https://www.vimeo.com/video'
        };

        const error = {
          status: 403,
          message: 'Unauthorized'
        };

        const mediaService = {
          createMedia: () => Promise.reject(error)
        };

        const dispatch = {
          media: {
            creatingMedia: () => null,
            addMedia: () => null
          }
        };

        await mediaModel(mediaService, toast).effects(dispatch).createMedia(media);

        expect(toast.error).toHaveBeenCalledWith(error);
      });
    });
  });
});
