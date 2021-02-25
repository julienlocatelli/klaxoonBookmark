export const mediaModel = (mediaService) => ({
  state: {
    isCreating: false,
    list: {
      isFetching: false,
      data: []
    },
    current: {
      isFetching: false,
      data: undefined
    }
  },
  reducers: {
    fetchingMedias(state, isFetching = true) {
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
          data: [...new Set([media, ...state.list.data])]
        }
      };
    },
    addMedias(state, medias) {
      return {
        ...state,
        list: {
          isFetching: false,
          data: [...new Set([...medias, ...state.list.data])]
        }
      };
    },
    fetchingMedia(state, isFetching = true) {
      return {
        ...state,
        current: {
          ...state.current,
          isFetching
        }
      };
    },
    setCurrentMedia(state, media) {
      return {
        ...state,
        current: {
          isFetching: false,
          data: media
        }
      };
    },
    updatingMedia(state, isUpdating = true) {
      return { ...state, current: { ...state.current, isUpdating } };
    },
    setMedia(state, media) {
      return {
        ...state,
        current: {
          isUpdating: false,
          data: media
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
    async fetchMedia(id) {
      try {
        dispatch.media.fetchingMedia();
        const media = await mediaService.fetchMedia(id);
        dispatch.media.setCurrentMedia(media);
      } catch (e) {
        // TODO: need to be implemented
      }
    },
    async fetchAllMedia() {
      try {
        dispatch.media.fetchingMedias();
        const medias = await mediaService.fetchAllMedia();
        dispatch.media.addMedias(medias);
      } catch (e) {
        // TODO: need to be implemented
      }
    },
    async editMedia(media) {
      try {
        dispatch.media.updatingMedia();
        const updatedMedia = await mediaService.updateMedia(media);
        dispatch.media.setMedia(updatedMedia);
      } catch (e) {
        // TODO: need to be implemented
      }
    }
  })
});
