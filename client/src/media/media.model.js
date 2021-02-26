const uniqList = (key, list) => [...new Map(list.map((item) => [item[key], item])).values()];

export const mediaModel = (mediaService, toast) => ({
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
          data: uniqList('id', [media, ...state.list.data])
        }
      };
    },
    addMedias(state, medias) {
      return {
        ...state,
        list: {
          isFetching: false,
          data: uniqList('id', [...medias, ...state.list.data])
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
        },
        list: {
          ...state.list,
          data: state.list.data.map((item) => (item.id === media.id ? media : item))
        }
      };
    }
  },
  effects: (dispatch) => ({
    async createMedia(media) {
      try {
        dispatch.media.creatingMedia();
        const createdMedia = await mediaService.createMedia(media);
        console.log('createdMedia', createdMedia);
        dispatch.media.addMedia(createdMedia);
      } catch (e) {
        toast.error(e);
      }
    },
    async fetchMedia(id) {
      try {
        dispatch.media.fetchingMedia();
        const media = await mediaService.fetchMedia(id);
        dispatch.media.setCurrentMedia(media);
      } catch (e) {
        toast.error(e);
      }
    },
    async fetchAllMedia() {
      try {
        dispatch.media.fetchingMedias();
        const medias = await mediaService.fetchAllMedia();
        dispatch.media.addMedias(medias);
      } catch (e) {
        toast.error(e);
      }
    },
    async editMedia(media) {
      try {
        dispatch.media.updatingMedia();
        await mediaService.updateMedia(media);
        dispatch.media.setMedia(media);
      } catch (e) {
        toast.error(e);
      }
    }
  })
});
