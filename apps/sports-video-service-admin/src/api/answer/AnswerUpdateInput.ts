import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type AnswerUpdateInput = {
  correct?: boolean | null;
  question?: QuestionWhereUniqueInput | null;
  text?: string | null;
};
