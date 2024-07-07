import { SortOrder } from "../../util/SortOrder";

export type CertificationOrderByInput = {
  coachId?: SortOrder;
  course?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
