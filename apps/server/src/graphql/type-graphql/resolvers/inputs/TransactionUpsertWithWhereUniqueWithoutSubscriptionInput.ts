import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionCreateWithoutSubscriptionInput } from "../inputs/TransactionCreateWithoutSubscriptionInput";
import { TransactionUpdateWithoutSubscriptionInput } from "../inputs/TransactionUpdateWithoutSubscriptionInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionUpsertWithWhereUniqueWithoutSubscriptionInput", {
  isAbstract: true
})
export class TransactionUpsertWithWhereUniqueWithoutSubscriptionInput {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionUpdateWithoutSubscriptionInput, {
    nullable: false
  })
  update!: TransactionUpdateWithoutSubscriptionInput;

  @TypeGraphQL.Field(_type => TransactionCreateWithoutSubscriptionInput, {
    nullable: false
  })
  create!: TransactionCreateWithoutSubscriptionInput;
}
