import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COACH_TITLE_FIELD } from "../coach/CoachTitle";

export const VideoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Videos"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
