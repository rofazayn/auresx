import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionCreateManySubscriptionInputEnvelope } from "../inputs/TransactionCreateManySubscriptionInputEnvelope";
import { TransactionCreateOrConnectWithoutSubscriptionInput } from "../inputs/TransactionCreateOrConnectWithoutSubscriptionInput";
import { TransactionCreateWithoutSubscriptionInput } from "../inputs/TransactionCreateWithoutSubscriptionInput";
import { TransactionScalarWhereInput } from "../inputs/TransactionScalarWhereInput";
import { TransactionUpdateManyWithWhereWithoutSubscriptionInput } from "../inputs/TransactionUpdateManyWithWhereWithoutSubscriptionInput";
import { TransactionUpdateWithWhereUniqueWithoutSubscriptionInput } from "../inputs/TransactionUpdateWithWhereUniqueWithoutSubscriptionInput";
import { TransactionUpsertWithWhereUniqueWithoutSubscriptionInput } from "../inputs/TransactionUpsertWithWhereUniqueWithoutSubscriptionInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType("TransactionUpdateManyWithoutSubscriptionNestedInput", {
  isAbstract: true
})
export class TransactionUpdateManyWithoutSubscriptionNestedInput {
  @TypeGraphQL.Field(_type => [TransactionCreateWithoutSubscriptionInput], {
    nullable: true
  })
  create?: TransactionCreateWithoutSubscriptionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutSubscriptionInput], {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutSubscriptionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpsertWithWhereUniqueWithoutSubscriptionInput], {
    nullable: true
  })
  upsert?: TransactionUpsertWithWhereUniqueWithoutSubscriptionInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionCreateManySubscriptionInputEnvelope, {
    nullable: true
  })
  createMany?: TransactionCreateManySubscriptionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  set?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  delete?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  connect?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpdateWithWhereUniqueWithoutSubscriptionInput], {
    nullable: true
  })
  update?: TransactionUpdateWithWhereUniqueWithoutSubscriptionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpdateManyWithWhereWithoutSubscriptionInput], {
    nullable: true
  })
  updateMany?: TransactionUpdateManyWithWhereWithoutSubscriptionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TransactionScalarWhereInput[] | undefined;
}
