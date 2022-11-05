import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlanWhereUniqueInput } from "../../../inputs/PlanWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePlanArgs {
  @TypeGraphQL.Field(_type => PlanWhereUniqueInput, {
    nullable: false
  })
  where!: PlanWhereUniqueInput;
}
