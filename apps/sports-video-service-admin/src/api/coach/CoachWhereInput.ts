import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CertificationListRelationFilter } from "../certification/CertificationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { VideoListRelationFilter } from "../video/VideoListRelationFilter";

export type CoachWhereInput = {
  bio?: StringNullableFilter;
  certifications?: CertificationListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  profilePicture?: JsonFilter;
  videos?: VideoListRelationFilter;
};
