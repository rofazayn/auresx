import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlanOrderByWithRelationInput } from "../../../inputs/PlanOrderByWithRelationInput";
import { PlanWhereInput } from "../../../inputs/PlanWhereInput";
import { PlanWhereUniqueInput } from "../../../inputs/PlanWhereUniqueInput";
import { PlanScalarFieldEnum } from "../../../../enums/PlanScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPlanArgs {
  @TypeGraphQL.Field(_type => PlanWhereInput, {
    nullable: true
  })
  where?: PlanWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlanOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PlanOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PlanWhereUniqueInput, {
    nullable: true
  })
  cursor?: PlanWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PlanScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "pricePerMonth" | "details" | "productId" | "createdAt" | "updatedAt"> | undefined;
}
