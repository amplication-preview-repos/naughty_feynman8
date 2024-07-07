import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { VIDEO_TITLE_FIELD } from "./VideoTitle";
import { COACH_TITLE_FIELD } from "../coach/CoachTitle";

export const VideoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Subscription"
          target="videoId"
          label="Subscriptions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="endDate" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="startDate" source="startDate" />
            <TextField
              label="stripeTransactionId"
              source="stripeTransactionId"
            />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Video" source="video.id" reference="Video">
              <TextField source={VIDEO_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
