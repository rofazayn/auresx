import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateWithoutProductInput } from "../inputs/SubscriptionCreateWithoutProductInput";
import { SubscriptionUpdateWithoutProductInput } from "../inputs/SubscriptionUpdateWithoutProductInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionUpsertWithWhereUniqueWithoutProductInput", {
  isAbstract: true
})
export class SubscriptionUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => SubscriptionWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionUpdateWithoutProductInput, {
    nullable: false
  })
  update!: SubscriptionUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => SubscriptionCreateWithoutProductInput, {
    nullable: false
  })
  create!: SubscriptionCreateWithoutProductInput;
}
