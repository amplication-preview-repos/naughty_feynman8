import { CertificationUpdateManyWithoutCoachesInput } from "./CertificationUpdateManyWithoutCoachesInput";
import { InputJsonValue } from "../../types";
import { VideoUpdateManyWithoutCoachesInput } from "./VideoUpdateManyWithoutCoachesInput";

export type CoachUpdateInput = {
  bio?: string | null;
  certifications?: CertificationUpdateManyWithoutCoachesInput;
  name?: string | null;
  profilePicture?: InputJsonValue;
  videos?: VideoUpdateManyWithoutCoachesInput;
};
