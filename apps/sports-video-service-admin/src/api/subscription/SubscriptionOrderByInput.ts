import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  stripeTransactionId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  videoId?: SortOrder;
};
