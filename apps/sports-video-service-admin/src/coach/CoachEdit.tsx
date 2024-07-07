import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CertificationTitle } from "../certification/CertificationTitle";
import { VideoTitle } from "../video/VideoTitle";

export const CoachEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <ReferenceArrayInput
          source="certifications"
          reference="Certification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CertificationTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <div />
        <ReferenceArrayInput
          source="videos"
          reference="Video"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VideoTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
