import { Coach } from "../coach/Coach";
import { JsonValue } from "type-fest";
import { Subscription } from "../subscription/Subscription";

export type Video = {
  category: string | null;
  coach?: Coach | null;
  createdAt: Date;
  description: string | null;
  encodingStatus?: "Option1" | null;
  id: string;
  outputUrls: JsonValue;
  price: number | null;
  subscriptions?: Array<Subscription>;
  thumbnailUrls: JsonValue;
  title: string | null;
  updatedAt: Date;
  url: string | null;
};
