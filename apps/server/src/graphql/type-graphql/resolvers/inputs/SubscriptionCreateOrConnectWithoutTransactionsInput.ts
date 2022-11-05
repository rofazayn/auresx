import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateWithoutTransactionsInput } from "../inputs/SubscriptionCreateWithoutTransactionsInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionCreateOrConnectWithoutTransactionsInput", {
  isAbstract: true
})
export class SubscriptionCreateOrConnectWithoutTransactionsInput {
  @TypeGraphQL.Field(_type => SubscriptionWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionCreateWithoutTransactionsInput, {
    nullable: false
  })
  create!: SubscriptionCreateWithoutTransactionsInput;
}
