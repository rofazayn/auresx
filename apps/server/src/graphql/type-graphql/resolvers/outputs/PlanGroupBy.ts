import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlanAvgAggregate } from "../outputs/PlanAvgAggregate";
import { PlanCountAggregate } from "../outputs/PlanCountAggregate";
import { PlanMaxAggregate } from "../outputs/PlanMaxAggregate";
import { PlanMinAggregate } from "../outputs/PlanMinAggregate";
import { PlanSumAggregate } from "../outputs/PlanSumAggregate";

@TypeGraphQL.ObjectType("PlanGroupBy", {
  isAbstract: true
})
export class PlanGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  pricePerMonth!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  details!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  productId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => PlanCountAggregate, {
    nullable: true
  })
  _count!: PlanCountAggregate | null;

  @TypeGraphQL.Field(_type => PlanAvgAggregate, {
    nullable: true
  })
  _avg!: PlanAvgAggregate | null;

  @TypeGraphQL.Field(_type => PlanSumAggregate, {
    nullable: true
  })
  _sum!: PlanSumAggregate | null;

  @TypeGraphQL.Field(_type => PlanMinAggregate, {
    nullable: true
  })
  _min!: PlanMinAggregate | null;

  @TypeGraphQL.Field(_type => PlanMaxAggregate, {
    nullable: true
  })
  _max!: PlanMaxAggregate | null;
}
