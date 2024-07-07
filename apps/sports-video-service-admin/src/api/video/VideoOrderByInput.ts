import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  category?: SortOrder;
  coachId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  encodingStatus?: SortOrder;
  id?: SortOrder;
  outputUrls?: SortOrder;
  price?: SortOrder;
  thumbnailUrls?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
