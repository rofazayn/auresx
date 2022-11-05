import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlanCreateWithoutProductInput } from "../inputs/PlanCreateWithoutProductInput";
import { PlanUpdateWithoutProductInput } from "../inputs/PlanUpdateWithoutProductInput";
import { PlanWhereUniqueInput } from "../inputs/PlanWhereUniqueInput";

@TypeGraphQL.InputType("PlanUpsertWithWhereUniqueWithoutProductInput", {
  isAbstract: true
})
export class PlanUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => PlanWhereUniqueInput, {
    nullable: false
  })
  where!: PlanWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlanUpdateWithoutProductInput, {
    nullable: false
  })
  update!: PlanUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => PlanCreateWithoutProductInput, {
    nullable: false
  })
  create!: PlanCreateWithoutProductInput;
}
