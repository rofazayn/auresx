import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlanCreateInput } from "../../../inputs/PlanCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePlanArgs {
  @TypeGraphQL.Field(_type => PlanCreateInput, {
    nullable: false
  })
  data!: PlanCreateInput;
}
