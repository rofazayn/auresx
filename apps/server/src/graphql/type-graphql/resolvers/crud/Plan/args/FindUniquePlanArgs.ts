import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlanWhereUniqueInput } from "../../../inputs/PlanWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePlanArgs {
  @TypeGraphQL.Field(_type => PlanWhereUniqueInput, {
    nullable: false
  })
  where!: PlanWhereUniqueInput;
}
