import MediaService from '../media/Media.service';

const fakeApi = {
  get(value) {
    return Promise.resolve(value);
  },
  post(value) {
    return Promise.resolve(value);
  }
};

export const mediaService = new MediaService(fakeApi);
