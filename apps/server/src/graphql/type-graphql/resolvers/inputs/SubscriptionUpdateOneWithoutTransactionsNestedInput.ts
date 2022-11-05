import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateOrConnectWithoutTransactionsInput } from "../inputs/SubscriptionCreateOrConnectWithoutTransactionsInput";
import { SubscriptionCreateWithoutTransactionsInput } from "../inputs/SubscriptionCreateWithoutTransactionsInput";
import { SubscriptionUpdateWithoutTransactionsInput } from "../inputs/SubscriptionUpdateWithoutTransactionsInput";
import { SubscriptionUpsertWithoutTransactionsInput } from "../inputs/SubscriptionUpsertWithoutTransactionsInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionUpdateOneWithoutTransactionsNestedInput", {
  isAbstract: true
})
export class SubscriptionUpdateOneWithoutTransactionsNestedInput {
  @TypeGraphQL.Field(_type => SubscriptionCreateWithoutTransactionsInput, {
    nullable: true
  })
  create?: SubscriptionCreateWithoutTransactionsInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionCreateOrConnectWithoutTransactionsInput, {
    nullable: true
  })
  connectOrCreate?: SubscriptionCreateOrConnectWithoutTransactionsInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionUpsertWithoutTransactionsInput, {
    nullable: true
  })
  upsert?: SubscriptionUpsertWithoutTransactionsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SubscriptionWhereUniqueInput, {
    nullable: true
  })
  connect?: SubscriptionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionUpdateWithoutTransactionsInput, {
    nullable: true
  })
  update?: SubscriptionUpdateWithoutTransactionsInput | undefined;
}
