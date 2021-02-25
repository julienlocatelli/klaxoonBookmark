class MediaService {
  constructor(api) {
    this.api = api;
  }

  createMedia(media) {
    // TODO: remove id: Date.now when connected to the BE
    return this.api.post({ ...media, id: Date.now() });
  }

  // TODO: add different filters as params
  fetchMedia() {
    const fakeMedia = {
      url: 'https://vimeo.com/509854632',
      title: 'titre',
      author: 'author',
      duration: '120',
      date: '2021-02-25T18:43:15.524Z',
      type: 'video',
      id: 1614278596818
    };
    return this.api.get([fakeMedia]);
  }
}

export default MediaService;
