import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlanCreateWithoutProductInput } from "../inputs/PlanCreateWithoutProductInput";
import { PlanWhereUniqueInput } from "../inputs/PlanWhereUniqueInput";

@TypeGraphQL.InputType("PlanCreateOrConnectWithoutProductInput", {
  isAbstract: true
})
export class PlanCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => PlanWhereUniqueInput, {
    nullable: false
  })
  where!: PlanWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlanCreateWithoutProductInput, {
    nullable: false
  })
  create!: PlanCreateWithoutProductInput;
}
