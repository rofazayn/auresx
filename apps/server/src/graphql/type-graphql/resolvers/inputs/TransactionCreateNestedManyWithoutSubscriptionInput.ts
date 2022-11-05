import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionCreateManySubscriptionInputEnvelope } from "../inputs/TransactionCreateManySubscriptionInputEnvelope";
import { TransactionCreateOrConnectWithoutSubscriptionInput } from "../inputs/TransactionCreateOrConnectWithoutSubscriptionInput";
import { TransactionCreateWithoutSubscriptionInput } from "../inputs/TransactionCreateWithoutSubscriptionInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionCreateNestedManyWithoutSubscriptionInput", {
  isAbstract: true
})
export class TransactionCreateNestedManyWithoutSubscriptionInput {
  @TypeGraphQL.Field(_type => [TransactionCreateWithoutSubscriptionInput], {
    nullable: true
  })
  create?: TransactionCreateWithoutSubscriptionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutSubscriptionInput], {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutSubscriptionInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionCreateManySubscriptionInputEnvelope, {
    nullable: true
  })
  createMany?: TransactionCreateManySubscriptionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  connect?: TransactionWhereUniqueInput[] | undefined;
}
