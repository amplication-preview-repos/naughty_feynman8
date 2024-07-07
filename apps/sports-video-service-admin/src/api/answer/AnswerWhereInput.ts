import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AnswerWhereInput = {
  correct?: BooleanNullableFilter;
  id?: StringFilter;
  question?: QuestionWhereUniqueInput;
  text?: StringNullableFilter;
};
