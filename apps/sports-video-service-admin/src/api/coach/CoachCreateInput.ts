import { CertificationCreateNestedManyWithoutCoachesInput } from "./CertificationCreateNestedManyWithoutCoachesInput";
import { InputJsonValue } from "../../types";
import { VideoCreateNestedManyWithoutCoachesInput } from "./VideoCreateNestedManyWithoutCoachesInput";

export type CoachCreateInput = {
  bio?: string | null;
  certifications?: CertificationCreateNestedManyWithoutCoachesInput;
  name?: string | null;
  profilePicture?: InputJsonValue;
  videos?: VideoCreateNestedManyWithoutCoachesInput;
};
