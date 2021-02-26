import { init } from '@rematch/core';
import { toast } from 'react-toastify';
import { mediaModel } from '../media/media.model';

import { mediaService } from './di';

const media = mediaModel(mediaService, toast);

const store = init({
  models: {
    media
  }
});

export default store;
