import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlanAvgOrderByAggregateInput } from "../inputs/PlanAvgOrderByAggregateInput";
import { PlanCountOrderByAggregateInput } from "../inputs/PlanCountOrderByAggregateInput";
import { PlanMaxOrderByAggregateInput } from "../inputs/PlanMaxOrderByAggregateInput";
import { PlanMinOrderByAggregateInput } from "../inputs/PlanMinOrderByAggregateInput";
import { PlanSumOrderByAggregateInput } from "../inputs/PlanSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PlanOrderByWithAggregationInput", {
  isAbstract: true
})
export class PlanOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pricePerMonth?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  details?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  productId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PlanCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PlanCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlanAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PlanAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlanMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PlanMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlanMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PlanMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlanSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PlanSumOrderByAggregateInput | undefined;
}
