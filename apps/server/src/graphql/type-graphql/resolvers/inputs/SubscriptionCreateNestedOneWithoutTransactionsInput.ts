import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateOrConnectWithoutTransactionsInput } from "../inputs/SubscriptionCreateOrConnectWithoutTransactionsInput";
import { SubscriptionCreateWithoutTransactionsInput } from "../inputs/SubscriptionCreateWithoutTransactionsInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionCreateNestedOneWithoutTransactionsInput", {
  isAbstract: true
})
export class SubscriptionCreateNestedOneWithoutTransactionsInput {
  @TypeGraphQL.Field(_type => SubscriptionCreateWithoutTransactionsInput, {
    nullable: true
  })
  create?: SubscriptionCreateWithoutTransactionsInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionCreateOrConnectWithoutTransactionsInput, {
    nullable: true
  })
  connectOrCreate?: SubscriptionCreateOrConnectWithoutTransactionsInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionWhereUniqueInput, {
    nullable: true
  })
  connect?: SubscriptionWhereUniqueInput | undefined;
}
