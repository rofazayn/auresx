import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionCreateManySubscriptionInput } from "../inputs/TransactionCreateManySubscriptionInput";

@TypeGraphQL.InputType("TransactionCreateManySubscriptionInputEnvelope", {
  isAbstract: true
})
export class TransactionCreateManySubscriptionInputEnvelope {
  @TypeGraphQL.Field(_type => [TransactionCreateManySubscriptionInput], {
    nullable: false
  })
  data!: TransactionCreateManySubscriptionInput[];
}
