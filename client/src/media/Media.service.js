class MediaService {
  constructor(api) {
    this.api = api;
  }

  createMedia(media) {
    // TODO: remove id: Date.now when connected to the BE
    return this.api.post({ ...media, id: Date.now() });
  }
}

export default MediaService;
