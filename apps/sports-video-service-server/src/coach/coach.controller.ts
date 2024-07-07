import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CoachService } from "./coach.service";
import { CoachControllerBase } from "./base/coach.controller.base";

@swagger.ApiTags("coaches")
@common.Controller("coaches")
export class CoachController extends CoachControllerBase {
  constructor(
    protected readonly service: CoachService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
