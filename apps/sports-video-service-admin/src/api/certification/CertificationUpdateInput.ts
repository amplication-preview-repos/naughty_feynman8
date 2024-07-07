import { CoachWhereUniqueInput } from "../coach/CoachWhereUniqueInput";

export type CertificationUpdateInput = {
  coach?: CoachWhereUniqueInput | null;
  course?: string | null;
  description?: string | null;
  title?: string | null;
};
