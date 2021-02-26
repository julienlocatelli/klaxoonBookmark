type ISize = {
  width?: number,
  height?: number
}

type IMedia = {
  url: string,
  title: string,
  author?: string,
  duration?: string | number,
  date: string,
  type: string,
  id?: string | number,
  size?: ISize
}

export interface IMediaService {
  getMedia(id: string): IMedia,
  getAllMedia(): Array<IMedia>,
  createMedia(media: IMedia): IMedia,
  updateMedia(media: IMedia): void
}

class MediaService {
  private media = [];

  contructor() {
  }

  createMedia(media: IMedia) {
    const id = Date.now();
    const newMedia = { ...media, id }
    this.media = [newMedia, ...this.media];
    return newMedia
  }

  getMedia(id: string): IMedia {
    return this.media.find(media => media.id);
  }

  getAllMedia(): Array<IMedia> {
    return this.media
  }

  updateMedia(media: IMedia): void {
    this.media = this.media.map(item => item.id === media.id ? media : item);
  }

}

export default MediaService