import { init } from '@rematch/core';
import { mediaModel } from '../media/media.model';

const media = mediaModel();

const store = init({
	models: {
		media
	}
});

export default store;
