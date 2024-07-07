import { Certification as TCertification } from "../api/certification/Certification";

export const CERTIFICATION_TITLE_FIELD = "title";

export const CertificationTitle = (record: TCertification): string => {
  return record.title?.toString() || String(record.id);
};
