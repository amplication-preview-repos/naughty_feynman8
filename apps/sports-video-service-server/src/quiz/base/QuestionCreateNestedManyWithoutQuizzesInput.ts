/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { QuestionWhereUniqueInput } from "../../question/base/QuestionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class QuestionCreateNestedManyWithoutQuizzesInput {
  @Field(() => [QuestionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestionWhereUniqueInput],
  })
  connect?: Array<QuestionWhereUniqueInput>;
}

export { QuestionCreateNestedManyWithoutQuizzesInput as QuestionCreateNestedManyWithoutQuizzesInput };
