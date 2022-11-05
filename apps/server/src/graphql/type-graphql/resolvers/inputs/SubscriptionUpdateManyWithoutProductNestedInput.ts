import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateManyProductInputEnvelope } from "../inputs/SubscriptionCreateManyProductInputEnvelope";
import { SubscriptionCreateOrConnectWithoutProductInput } from "../inputs/SubscriptionCreateOrConnectWithoutProductInput";
import { SubscriptionCreateWithoutProductInput } from "../inputs/SubscriptionCreateWithoutProductInput";
import { SubscriptionScalarWhereInput } from "../inputs/SubscriptionScalarWhereInput";
import { SubscriptionUpdateManyWithWhereWithoutProductInput } from "../inputs/SubscriptionUpdateManyWithWhereWithoutProductInput";
import { SubscriptionUpdateWithWhereUniqueWithoutProductInput } from "../inputs/SubscriptionUpdateWithWhereUniqueWithoutProductInput";
import { SubscriptionUpsertWithWhereUniqueWithoutProductInput } from "../inputs/SubscriptionUpsertWithWhereUniqueWithoutProductInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionUpdateManyWithoutProductNestedInput", {
  isAbstract: true
})
export class SubscriptionUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [SubscriptionCreateWithoutProductInput], {
    nullable: true
  })
  create?: SubscriptionCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: SubscriptionCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: SubscriptionUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscriptionCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: SubscriptionCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionWhereUniqueInput], {
    nullable: true
  })
  set?: SubscriptionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SubscriptionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionWhereUniqueInput], {
    nullable: true
  })
  delete?: SubscriptionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionWhereUniqueInput], {
    nullable: true
  })
  connect?: SubscriptionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: SubscriptionUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: SubscriptionUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SubscriptionScalarWhereInput[] | undefined;
}
