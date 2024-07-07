import { CoachWhereUniqueInput } from "../coach/CoachWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SubscriptionUpdateManyWithoutVideosInput } from "./SubscriptionUpdateManyWithoutVideosInput";

export type VideoUpdateInput = {
  category?: string | null;
  coach?: CoachWhereUniqueInput | null;
  description?: string | null;
  encodingStatus?: "Option1" | null;
  outputUrls?: InputJsonValue;
  price?: number | null;
  subscriptions?: SubscriptionUpdateManyWithoutVideosInput;
  thumbnailUrls?: InputJsonValue;
  title?: string | null;
  url?: string | null;
};
