import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlanAvgAggregate } from "../outputs/PlanAvgAggregate";
import { PlanCountAggregate } from "../outputs/PlanCountAggregate";
import { PlanMaxAggregate } from "../outputs/PlanMaxAggregate";
import { PlanMinAggregate } from "../outputs/PlanMinAggregate";
import { PlanSumAggregate } from "../outputs/PlanSumAggregate";

@TypeGraphQL.ObjectType("AggregatePlan", {
  isAbstract: true
})
export class AggregatePlan {
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
