import axios from 'axios';

import MediaService from '../media/Media.service';
import AxiosApi from './AxiosApi';

const PORT = process.env.PORT || 5001;
const baseUrl = `http://localhost:${PORT}`;
const api = new AxiosApi(axios, baseUrl);

export const mediaService = new MediaService(api);
