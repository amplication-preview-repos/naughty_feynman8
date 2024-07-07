import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "stripeTransactionId";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.stripeTransactionId?.toString() || String(record.id);
};
