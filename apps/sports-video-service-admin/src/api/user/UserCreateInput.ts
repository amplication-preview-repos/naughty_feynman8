import { QuizCreateNestedManyWithoutUsersInput } from "./QuizCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SubscriptionCreateNestedManyWithoutUsersInput } from "./SubscriptionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  quizzes?: QuizCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  subscriptions?: SubscriptionCreateNestedManyWithoutUsersInput;
  username: string;
};
