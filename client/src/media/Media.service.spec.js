import MediaService from './Media.service';

describe('MediaService', () => {
  describe('#createMedia', () => {
    it('should post the media', async () => {
      const media = {
        author: 'john doe'
      };
      const api = {
        post: jest.fn(() => Promise.resolve())
      };
      const mediaService = new MediaService(api);

      await mediaService.createMedia(media);

      expect(api.post).toHaveBeenCalledWith('/createMedia', expect.objectContaining(media));
    });
  });
});
