import MediaService from './Media.service';

describe('MediaService', () => {
  describe('#createMedia', () => {
    it('should post the media', async () => {
      const media = {
        author: 'john doe'
      };
      const api = {
        post: jest.fn(() => Promise.resolve({ data: { media } }))
      };
      const mediaService = new MediaService(api);

      await mediaService.createMedia(media);

      expect(api.post).toHaveBeenCalledWith('/media', expect.objectContaining(media));
    });

    it('should throw an error when the request fails', async () => {
      const media = {
        author: 'john doe'
      };
      const message = 'Not found';
      const api = {
        post: jest.fn(() => Promise.reject({ message }))
      };
      const mediaService = new MediaService(api);

      await expect(mediaService.createMedia(media)).rejects.toEqual(message);
    });
  });
});
