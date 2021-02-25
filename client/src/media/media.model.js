export const mediaModel = (mediaService) => ({
  state: {
    isCreating: false,
    list: {
      isFetching: false,
      data: []
    }
  },
  reducers: {
    fetchingMedia(state, isFetching = true) {
      return { ...state, list: { ...state.list, isFetching } };
    },
    creatingMedia(state, isCreating = true) {
      return { ...state, isCreating };
    },
    addMedia(state, media) {
      return {
        ...state,
        isCreating: false,
        list: {
          ...state.list,
          data: [media, ...state.list.data]
        }
      };
    },
    addMedias(state, medias) {
      return {
        ...state,
        list: {
          isFetching: false,
          data: [...medias, ...state.list.data]
        }
      };
    }
  },
  effects: (dispatch) => ({
    async createMedia(media) {
      try {
        dispatch.media.creatingMedia(true);
        const createdMedia = await mediaService.createMedia(media);
        dispatch.media.addMedia(createdMedia);
      } catch (e) {
        // TODO: need to be implemented
      }
    },
    async fetchMedia() {
      try {
        dispatch.media.fetchingMedia();
        const medias = await mediaService.fetchMedia();
        dispatch.media.addMedias(medias);
      } catch (e) {
        // TODO: need to be implemented
      }
    }
  })
});
