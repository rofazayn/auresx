import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlanUpdateManyMutationInput } from "../../../inputs/PlanUpdateManyMutationInput";
import { PlanWhereInput } from "../../../inputs/PlanWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPlanArgs {
  @TypeGraphQL.Field(_type => PlanUpdateManyMutationInput, {
    nullable: false
  })
  data!: PlanUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PlanWhereInput, {
    nullable: true
  })
  where?: PlanWhereInput | undefined;
}
