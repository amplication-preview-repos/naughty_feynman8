import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type SubscriptionUpdateInput = {
  endDate?: Date | null;
  startDate?: Date | null;
  stripeTransactionId?: string | null;
  user?: UserWhereUniqueInput | null;
  video?: VideoWhereUniqueInput | null;
};
