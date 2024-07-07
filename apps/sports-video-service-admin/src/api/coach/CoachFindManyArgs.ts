import { CoachWhereInput } from "./CoachWhereInput";
import { CoachOrderByInput } from "./CoachOrderByInput";

export type CoachFindManyArgs = {
  where?: CoachWhereInput;
  orderBy?: Array<CoachOrderByInput>;
  skip?: number;
  take?: number;
};
