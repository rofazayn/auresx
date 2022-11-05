import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionCreateManyUserInput } from "../inputs/TransactionCreateManyUserInput";

@TypeGraphQL.InputType("TransactionCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class TransactionCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [TransactionCreateManyUserInput], {
    nullable: false
  })
  data!: TransactionCreateManyUserInput[];
}
