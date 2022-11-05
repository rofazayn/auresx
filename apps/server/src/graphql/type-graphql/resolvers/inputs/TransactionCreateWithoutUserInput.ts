import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateNestedOneWithoutTransactionsInput } from "../inputs/SubscriptionCreateNestedOneWithoutTransactionsInput";

@TypeGraphQL.InputType("TransactionCreateWithoutUserInput", {
  isAbstract: true
})
export class TransactionCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  amount?: number | undefined;

  @TypeGraphQL.Field(_type => SubscriptionCreateNestedOneWithoutTransactionsInput, {
    nullable: true
  })
  subscription?: SubscriptionCreateNestedOneWithoutTransactionsInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
