import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CoachServiceBase } from "./base/coach.service.base";

@Injectable()
export class CoachService extends CoachServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
