import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlanWhereInput } from "../../../inputs/PlanWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPlanArgs {
  @TypeGraphQL.Field(_type => PlanWhereInput, {
    nullable: true
  })
  where?: PlanWhereInput | undefined;
}
