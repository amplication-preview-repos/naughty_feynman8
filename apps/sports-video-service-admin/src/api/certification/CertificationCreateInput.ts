import { CoachWhereUniqueInput } from "../coach/CoachWhereUniqueInput";

export type CertificationCreateInput = {
  coach?: CoachWhereUniqueInput | null;
  course?: string | null;
  description?: string | null;
  title?: string | null;
};
