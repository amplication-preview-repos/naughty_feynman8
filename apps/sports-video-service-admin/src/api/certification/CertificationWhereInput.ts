import { CoachWhereUniqueInput } from "../coach/CoachWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CertificationWhereInput = {
  coach?: CoachWhereUniqueInput;
  course?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
