import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CoachTitle } from "../coach/CoachTitle";

export const CertificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="coach.id" reference="Coach" label="coach">
          <SelectInput optionText={CoachTitle} />
        </ReferenceInput>
        <TextInput label="course" source="course" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
