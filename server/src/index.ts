require('dotenv').config()
import ServerRest from "./infra/http/ServerRest";
import MediaService from './domain/MediaService';

const PORT = parseInt(process.env.PORT) || 5001;

const mediaService = new MediaService();

const serverRest = new ServerRest(PORT, mediaService);
serverRest.start();
