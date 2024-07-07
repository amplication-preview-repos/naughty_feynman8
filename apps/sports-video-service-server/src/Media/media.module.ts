import { Module } from "@nestjs/common";
import { MediaService } from "./media.service";
import { MediaController } from "./media.controller";
import { MediaResolver } from "./media.resolver";

@Module({
  controllers: [MediaController],
  providers: [MediaService, MediaResolver],
  exports: [MediaService],
})
export class MediaModule {}
