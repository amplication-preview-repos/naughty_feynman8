import { QuestionCreateNestedManyWithoutQuizzesInput } from "./QuestionCreateNestedManyWithoutQuizzesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuizCreateInput = {
  course?: string | null;
  questions?: QuestionCreateNestedManyWithoutQuizzesInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
