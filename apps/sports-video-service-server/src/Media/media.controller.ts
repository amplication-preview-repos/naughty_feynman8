import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MediaService } from "./media.service";
import { VideoUploadDto } from "../media/VideoUploadDto";
import { VideoOutputDto } from "../media/VideoOutputDto";

@swagger.ApiTags("media")
@common.Controller("media")
export class MediaController {
  constructor(protected readonly service: MediaService) {}

  @common.Get("/status/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CheckEncodingStatus(
    @common.Body()
    body: VideoUploadDto
  ): Promise<string> {
        return this.service.CheckEncodingStatus(body);
      }

  @common.Get("/videos/:id")
  @swagger.ApiOkResponse({
    type: VideoOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetEncodedVideos(
    @common.Body()
    body: VideoUploadDto
  ): Promise<VideoOutputDto> {
        return this.service.GetEncodedVideos(body);
      }

  @common.Post("/upload")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadVideo(
    @common.Body()
    body: VideoUploadDto
  ): Promise<boolean> {
        return this.service.UploadVideo(body);
      }
}
