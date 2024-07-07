import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CoachTitle } from "../coach/CoachTitle";

export const CertificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="coach.id" reference="Coach" label="coach">
          <SelectInput optionText={CoachTitle} />
        </ReferenceInput>
        <TextInput label="course" source="course" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
