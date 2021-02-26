import axios from 'axios';

import MediaService from '../media/Media.service';
import AxiosApi from './AxiosApi';

const baseUrl = 'http://localhost:5000';
const api = new AxiosApi(axios, baseUrl);

export const mediaService = new MediaService(api);
