import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransactionCreateManyInput } from "../../../inputs/TransactionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTransactionArgs {
  @TypeGraphQL.Field(_type => [TransactionCreateManyInput], {
    nullable: false
  })
  data!: TransactionCreateManyInput[];
}
