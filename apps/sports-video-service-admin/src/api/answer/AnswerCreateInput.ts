import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type AnswerCreateInput = {
  correct?: boolean | null;
  question?: QuestionWhereUniqueInput | null;
  text?: string | null;
};
