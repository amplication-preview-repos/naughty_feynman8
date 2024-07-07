import { Question } from "../question/Question";
import { User } from "../user/User";

export type Quiz = {
  course: string | null;
  createdAt: Date;
  id: string;
  questions?: Array<Question>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
