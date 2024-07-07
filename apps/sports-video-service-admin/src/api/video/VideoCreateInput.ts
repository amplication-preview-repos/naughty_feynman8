import { CoachWhereUniqueInput } from "../coach/CoachWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SubscriptionCreateNestedManyWithoutVideosInput } from "./SubscriptionCreateNestedManyWithoutVideosInput";

export type VideoCreateInput = {
  category?: string | null;
  coach?: CoachWhereUniqueInput | null;
  description?: string | null;
  encodingStatus?: "Option1" | null;
  outputUrls?: InputJsonValue;
  price?: number | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutVideosInput;
  thumbnailUrls?: InputJsonValue;
  title?: string | null;
  url?: string | null;
};
