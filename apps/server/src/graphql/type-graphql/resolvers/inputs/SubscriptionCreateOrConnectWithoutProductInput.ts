import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateWithoutProductInput } from "../inputs/SubscriptionCreateWithoutProductInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionCreateOrConnectWithoutProductInput", {
  isAbstract: true
})
export class SubscriptionCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => SubscriptionWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionCreateWithoutProductInput, {
    nullable: false
  })
  create!: SubscriptionCreateWithoutProductInput;
}
