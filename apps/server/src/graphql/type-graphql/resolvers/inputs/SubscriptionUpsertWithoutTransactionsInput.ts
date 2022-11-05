import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateWithoutTransactionsInput } from "../inputs/SubscriptionCreateWithoutTransactionsInput";
import { SubscriptionUpdateWithoutTransactionsInput } from "../inputs/SubscriptionUpdateWithoutTransactionsInput";

@TypeGraphQL.InputType("SubscriptionUpsertWithoutTransactionsInput", {
  isAbstract: true
})
export class SubscriptionUpsertWithoutTransactionsInput {
  @TypeGraphQL.Field(_type => SubscriptionUpdateWithoutTransactionsInput, {
    nullable: false
  })
  update!: SubscriptionUpdateWithoutTransactionsInput;

  @TypeGraphQL.Field(_type => SubscriptionCreateWithoutTransactionsInput, {
    nullable: false
  })
  create!: SubscriptionCreateWithoutTransactionsInput;
}
