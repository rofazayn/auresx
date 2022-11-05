import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionUpdateWithoutProductInput } from "../inputs/SubscriptionUpdateWithoutProductInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionUpdateWithWhereUniqueWithoutProductInput", {
  isAbstract: true
})
export class SubscriptionUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => SubscriptionWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionUpdateWithoutProductInput, {
    nullable: false
  })
  data!: SubscriptionUpdateWithoutProductInput;
}
