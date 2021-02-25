import { mediaModel } from './media.model';

describe('#mediaModel', () => {
  describe('#reducers', () => {});

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

        expect(dispatch.media.creatingMedia).toHaveBeenCalledWith(true);
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
    });
  });
});
