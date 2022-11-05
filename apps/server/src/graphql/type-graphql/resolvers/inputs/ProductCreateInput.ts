import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlanCreateNestedManyWithoutProductInput } from "../inputs/PlanCreateNestedManyWithoutProductInput";
import { SubscriptionCreateNestedManyWithoutProductInput } from "../inputs/SubscriptionCreateNestedManyWithoutProductInput";

@TypeGraphQL.InputType("ProductCreateInput", {
  isAbstract: true
})
export class ProductCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  monthPrice?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  trialDuration?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  cancelDuration?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  infoURL?: string | undefined;

  @TypeGraphQL.Field(_type => PlanCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  plans?: PlanCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  subscriptions?: SubscriptionCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
