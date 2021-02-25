export const mediaModel = (mediaService) => ({
  state: {
    isCreating: false,
    list: {
      isFetching: false,
      data: []
    }
  },
  reducers: {
    creatingMedia(state, isCreating = true) {
      return { ...state, isCreating };
    },
    addMedia(state, media) {
      return {
        ...state,
        isCreating: false,
        list: {
          ...state.list,
          data: [...state.list.data, media]
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
        // waiting for the backend
      }
    }
  })
});
