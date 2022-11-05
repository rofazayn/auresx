import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlanWhereInput } from "../inputs/PlanWhereInput";

@TypeGraphQL.InputType("PlanListRelationFilter", {
  isAbstract: true
})
export class PlanListRelationFilter {
  @TypeGraphQL.Field(_type => PlanWhereInput, {
    nullable: true
  })
  every?: PlanWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlanWhereInput, {
    nullable: true
  })
  some?: PlanWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlanWhereInput, {
    nullable: true
  })
  none?: PlanWhereInput | undefined;
}
