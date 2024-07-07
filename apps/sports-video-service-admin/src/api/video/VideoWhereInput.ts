import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CoachWhereUniqueInput } from "../coach/CoachWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type VideoWhereInput = {
  category?: StringNullableFilter;
  coach?: CoachWhereUniqueInput;
  description?: StringNullableFilter;
  encodingStatus?: "Option1";
  id?: StringFilter;
  outputUrls?: JsonFilter;
  price?: FloatNullableFilter;
  subscriptions?: SubscriptionListRelationFilter;
  thumbnailUrls?: JsonFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
};
