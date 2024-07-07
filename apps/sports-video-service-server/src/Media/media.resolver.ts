import * as graphql from "@nestjs/graphql";
import { VideoOutputDto } from "../media/VideoOutputDto";
import { VideoUploadDto } from "../media/VideoUploadDto";
import { MediaService } from "./media.service";

export class MediaResolver {
  constructor(protected readonly service: MediaService) {}

  @graphql.Query(() => String)
  async CheckEncodingStatus(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CheckEncodingStatus(args);
  }

  @graphql.Query(() => VideoOutputDto)
  async GetEncodedVideos(
    @graphql.Args()
    args: string
  ): Promise<VideoOutputDto> {
    return this.service.GetEncodedVideos(args);
  }

  @graphql.Mutation(() => Boolean)
  async UploadVideo(
    @graphql.Args()
    args: VideoUploadDto
  ): Promise<boolean> {
    return this.service.UploadVideo(args);
  }
}
