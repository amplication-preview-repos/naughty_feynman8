import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuizWhereInput = {
  course?: StringNullableFilter;
  id?: StringFilter;
  questions?: QuestionListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
