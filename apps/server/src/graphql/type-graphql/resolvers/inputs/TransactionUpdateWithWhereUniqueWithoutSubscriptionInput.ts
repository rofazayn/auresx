import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionUpdateWithoutSubscriptionInput } from "../inputs/TransactionUpdateWithoutSubscriptionInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionUpdateWithWhereUniqueWithoutSubscriptionInput", {
  isAbstract: true
})
export class TransactionUpdateWithWhereUniqueWithoutSubscriptionInput {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionUpdateWithoutSubscriptionInput, {
    nullable: false
  })
  data!: TransactionUpdateWithoutSubscriptionInput;
}
