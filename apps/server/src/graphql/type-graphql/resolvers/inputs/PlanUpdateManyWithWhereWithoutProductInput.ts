import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlanScalarWhereInput } from "../inputs/PlanScalarWhereInput";
import { PlanUpdateManyMutationInput } from "../inputs/PlanUpdateManyMutationInput";

@TypeGraphQL.InputType("PlanUpdateManyWithWhereWithoutProductInput", {
  isAbstract: true
})
export class PlanUpdateManyWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => PlanScalarWhereInput, {
    nullable: false
  })
  where!: PlanScalarWhereInput;

  @TypeGraphQL.Field(_type => PlanUpdateManyMutationInput, {
    nullable: false
  })
  data!: PlanUpdateManyMutationInput;
}
