import { Coach } from "../coach/Coach";

export type Certification = {
  coach?: Coach | null;
  course: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
