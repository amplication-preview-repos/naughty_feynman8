import { Question } from "../question/Question";

export type Answer = {
  correct: boolean | null;
  createdAt: Date;
  id: string;
  question?: Question | null;
  text: string | null;
  updatedAt: Date;
};
