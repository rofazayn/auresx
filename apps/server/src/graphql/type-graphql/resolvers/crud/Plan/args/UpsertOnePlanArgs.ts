import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlanCreateInput } from "../../../inputs/PlanCreateInput";
import { PlanUpdateInput } from "../../../inputs/PlanUpdateInput";
import { PlanWhereUniqueInput } from "../../../inputs/PlanWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePlanArgs {
  @TypeGraphQL.Field(_type => PlanWhereUniqueInput, {
    nullable: false
  })
  where!: PlanWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlanCreateInput, {
    nullable: false
  })
  create!: PlanCreateInput;

  @TypeGraphQL.Field(_type => PlanUpdateInput, {
    nullable: false
  })
  update!: PlanUpdateInput;
}
