const fakeMedia = {
  url: 'https://vimeo.com/509854632',
  title: 'titre',
  author: 'author',
  duration: '120',
  date: '2021-02-25T18:43:15.524Z',
  type: 'video',
  id: 1614278596818,
  size: {
    width: 500,
    height: 300
  }
};

class MediaService {
  constructor(api) {
    this.api = api;
  }

  createMedia(media) {
    // TODO: remove id: Date.now when connected to the BE
    return this.api.post('/createMedia', { ...media, id: Date.now() });
  }

  fetchMedia(id) {
    return this.api.get(`/media/${id}`, fakeMedia);
  }

  // TODO: add different filters as params
  fetchAllMedia() {
    return this.api.get('/media', [fakeMedia]);
  }

  updateMedia(media) {
    return this.api.put(`/media/${media.id}`, media);
  }
}

export default MediaService;
