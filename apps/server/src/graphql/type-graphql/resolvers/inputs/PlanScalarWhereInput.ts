import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PlanScalarWhereInput", {
  isAbstract: true
})
export class PlanScalarWhereInput {
  @TypeGraphQL.Field(_type => [PlanScalarWhereInput], {
    nullable: true
  })
  AND?: PlanScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlanScalarWhereInput], {
    nullable: true
  })
  OR?: PlanScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlanScalarWhereInput], {
    nullable: true
  })
  NOT?: PlanScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  pricePerMonth?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  details?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  productId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;
}
