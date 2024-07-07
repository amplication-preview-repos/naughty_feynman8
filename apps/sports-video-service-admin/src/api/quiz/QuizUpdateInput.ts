import { QuestionUpdateManyWithoutQuizzesInput } from "./QuestionUpdateManyWithoutQuizzesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuizUpdateInput = {
  course?: string | null;
  questions?: QuestionUpdateManyWithoutQuizzesInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
