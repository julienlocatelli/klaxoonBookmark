import { init } from '@rematch/core';
import { mediaModel } from '../media/media.model';

import { mediaService } from './di';

const media = mediaModel(mediaService);

const store = init({
  models: {
    media
  }
});

export default store;
