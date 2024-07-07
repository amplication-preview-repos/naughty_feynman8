import { SortOrder } from "../../util/SortOrder";

export type AnswerOrderByInput = {
  correct?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  questionId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
