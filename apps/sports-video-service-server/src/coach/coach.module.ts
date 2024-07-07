import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CoachModuleBase } from "./base/coach.module.base";
import { CoachService } from "./coach.service";
import { CoachController } from "./coach.controller";
import { CoachResolver } from "./coach.resolver";

@Module({
  imports: [CoachModuleBase, forwardRef(() => AuthModule)],
  controllers: [CoachController],
  providers: [CoachService, CoachResolver],
  exports: [CoachService],
})
export class CoachModule {}
