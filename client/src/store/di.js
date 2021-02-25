import MediaService from '../media/Media.service';

const fakeApi = {
  get(_, value) {
    return Promise.resolve(value);
  },
  post(_, value) {
    return Promise.resolve(value);
  },
  put(_, value) {
    return Promise.resolve(value);
  }
};

export const mediaService = new MediaService(fakeApi);
