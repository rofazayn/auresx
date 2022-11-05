import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionCreateWithoutSubscriptionInput } from "../inputs/TransactionCreateWithoutSubscriptionInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionCreateOrConnectWithoutSubscriptionInput", {
  isAbstract: true
})
export class TransactionCreateOrConnectWithoutSubscriptionInput {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionCreateWithoutSubscriptionInput, {
    nullable: false
  })
  create!: TransactionCreateWithoutSubscriptionInput;
}
