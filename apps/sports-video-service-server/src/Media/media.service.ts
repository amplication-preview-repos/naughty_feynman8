import { Injectable } from "@nestjs/common";
import { VideoOutputDto } from "../media/VideoOutputDto";
import { VideoUploadDto } from "../media/VideoUploadDto";

@Injectable()
export class MediaService {
  constructor() {}
  async CheckEncodingStatus(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetEncodedVideos(args: string): Promise<VideoOutputDto> {
    throw new Error("Not implemented");
  }
  async UploadVideo(args: VideoUploadDto): Promise<boolean> {
    throw new Error("Not implemented");
  }
}
