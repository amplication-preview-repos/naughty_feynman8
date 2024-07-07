import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COACH_TITLE_FIELD } from "./CoachTitle";

export const CoachShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bio" source="bio" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="profilePicture" source="profilePicture" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Certification"
          target="coachId"
          label="Certifications"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="coach" source="coach.id" reference="Coach">
              <TextField source={COACH_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="course" source="course" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Video" target="coachId" label="Videos">
          <Datagrid rowClick="show">
            <TextField label="category" source="category" />
            <ReferenceField label="Coach" source="coach.id" reference="Coach">
              <TextField source={COACH_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="encodingStatus" source="encodingStatus" />
            <TextField label="ID" source="id" />
            <TextField label="outputUrls" source="outputUrls" />
            <TextField label="price" source="price" />
            <TextField label="thumbnailUrls" source="thumbnailUrls" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="url" source="url" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
