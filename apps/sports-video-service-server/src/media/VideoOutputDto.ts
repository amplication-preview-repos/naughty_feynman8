import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("VideoOutputDtoObject")
class VideoOutputDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    encodingStatus!: string;

    @Field(() => GraphQLJSON)
    outputUrls!: InputJsonValue;

    @Field(() => GraphQLJSON)
    thumbnailUrls!: InputJsonValue;
}

export { VideoOutputDto as VideoOutputDto };