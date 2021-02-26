import express, { Request, Response } from "express";
import { IMediaService } from '../../domain/MediaService';
import bodyParser from 'body-parser'
import cors from 'cors';

class ServerRest {
  private port: number
  private mediaService: IMediaService

  constructor(port: number, mediaService: IMediaService) {
    this.port = port;
    this.mediaService = mediaService;
  }

  start(): void {
    const app = express();

    app.use(cors());

    app.use(bodyParser.json());

    app.get('/media', (_, res: Response) => {
      const mediaList = this.mediaService.getAllMedia();
      res.send(mediaList)
    });

    app.get('/media/:id', (req: Request, res: Response) => {
      const { id } = req.params;
      const media = this.mediaService.getMedia(id)

      if (!media) {
        return res.status(404).send({ error: 'media not found', data: {} })
      }

      res.send(media);
    });

    app.post('/media', (req: Request, res: Response) => {
      // TODO: check the media attributes
      const media = req.body
      const newMedia = this.mediaService.createMedia(media);

      res.send(newMedia);
    });

    app.put('/media', (req: Request, res: Response) => {
      // TODO: check the media attributes
      const media = req.body
      const newMedia = this.mediaService.updateMedia(media);

      res.send(newMedia);
    });

    app.listen(this.port, () => {
      console.log(`Server Rest listening on port ${this.port}`)
    });

  }
}

export default ServerRest;

