import { Coach as TCoach } from "../api/coach/Coach";

export const COACH_TITLE_FIELD = "name";

export const CoachTitle = (record: TCoach): string => {
  return record.name?.toString() || String(record.id);
};
