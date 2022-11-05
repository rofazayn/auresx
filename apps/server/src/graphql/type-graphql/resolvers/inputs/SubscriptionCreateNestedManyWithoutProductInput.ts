import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateManyProductInputEnvelope } from "../inputs/SubscriptionCreateManyProductInputEnvelope";
import { SubscriptionCreateOrConnectWithoutProductInput } from "../inputs/SubscriptionCreateOrConnectWithoutProductInput";
import { SubscriptionCreateWithoutProductInput } from "../inputs/SubscriptionCreateWithoutProductInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionCreateNestedManyWithoutProductInput", {
  isAbstract: true
})
export class SubscriptionCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [SubscriptionCreateWithoutProductInput], {
    nullable: true
  })
  create?: SubscriptionCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: SubscriptionCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscriptionCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: SubscriptionCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionWhereUniqueInput], {
    nullable: true
  })
  connect?: SubscriptionWhereUniqueInput[] | undefined;
}
