import { User } from "../user/User";
import { Video } from "../video/Video";

export type Subscription = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  stripeTransactionId: string | null;
  updatedAt: Date;
  user?: User | null;
  video?: Video | null;
};
