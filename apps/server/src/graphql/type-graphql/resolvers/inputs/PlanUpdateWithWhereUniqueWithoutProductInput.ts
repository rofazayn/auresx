import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlanUpdateWithoutProductInput } from "../inputs/PlanUpdateWithoutProductInput";
import { PlanWhereUniqueInput } from "../inputs/PlanWhereUniqueInput";

@TypeGraphQL.InputType("PlanUpdateWithWhereUniqueWithoutProductInput", {
  isAbstract: true
})
export class PlanUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => PlanWhereUniqueInput, {
    nullable: false
  })
  where!: PlanWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlanUpdateWithoutProductInput, {
    nullable: false
  })
  data!: PlanUpdateWithoutProductInput;
}
