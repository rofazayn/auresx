import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlanUpdateInput } from "../../../inputs/PlanUpdateInput";
import { PlanWhereUniqueInput } from "../../../inputs/PlanWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePlanArgs {
  @TypeGraphQL.Field(_type => PlanUpdateInput, {
    nullable: false
  })
  data!: PlanUpdateInput;

  @TypeGraphQL.Field(_type => PlanWhereUniqueInput, {
    nullable: false
  })
  where!: PlanWhereUniqueInput;
}
