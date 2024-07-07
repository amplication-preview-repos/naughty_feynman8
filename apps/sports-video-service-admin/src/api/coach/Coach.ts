import { Certification } from "../certification/Certification";
import { JsonValue } from "type-fest";
import { Video } from "../video/Video";

export type Coach = {
  bio: string | null;
  certifications?: Array<Certification>;
  createdAt: Date;
  id: string;
  name: string | null;
  profilePicture: JsonValue;
  updatedAt: Date;
  videos?: Array<Video>;
};
