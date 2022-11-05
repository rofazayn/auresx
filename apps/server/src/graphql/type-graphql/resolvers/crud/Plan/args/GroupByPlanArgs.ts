import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlanOrderByWithAggregationInput } from "../../../inputs/PlanOrderByWithAggregationInput";
import { PlanScalarWhereWithAggregatesInput } from "../../../inputs/PlanScalarWhereWithAggregatesInput";
import { PlanWhereInput } from "../../../inputs/PlanWhereInput";
import { PlanScalarFieldEnum } from "../../../../enums/PlanScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPlanArgs {
  @TypeGraphQL.Field(_type => PlanWhereInput, {
    nullable: true
  })
  where?: PlanWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlanOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PlanOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlanScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "pricePerMonth" | "details" | "productId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => PlanScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PlanScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
