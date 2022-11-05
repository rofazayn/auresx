import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlanCreateManyInput } from "../../../inputs/PlanCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPlanArgs {
  @TypeGraphQL.Field(_type => [PlanCreateManyInput], {
    nullable: false
  })
  data!: PlanCreateManyInput[];
}
