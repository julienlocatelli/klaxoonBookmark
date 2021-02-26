class MediaService {
  constructor(api) {
    this.api = api;
  }

  async createMedia(media) {
    try {
      const response = await this.api.post('/media', media);
      return response.data;
    } catch (e) {
      throw e.message;
    }
  }

  async fetchMedia(id) {
    try {
      const response = await this.api.get(`/media/${id}`);
      return response.data;
    } catch (e) {
      throw e.message;
    }
  }

  // TODO: add different filters and pagination e.g. {take: 10, drop: 0}
  async fetchAllMedia() {
    try {
      const response = await this.api.get('/media');
      return response.data;
    } catch (e) {
      throw e.message;
    }
  }

  async updateMedia(media) {
    try {
      return await this.api.put('media', media);
    } catch (e) {
      throw e.message;
    }
  }
}

export default MediaService;
