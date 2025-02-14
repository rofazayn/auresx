import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionScalarWhereInput } from "../inputs/SubscriptionScalarWhereInput";
import { SubscriptionUpdateManyMutationInput } from "../inputs/SubscriptionUpdateManyMutationInput";

@TypeGraphQL.InputType("SubscriptionUpdateManyWithWhereWithoutProductInput", {
  isAbstract: true
})
export class SubscriptionUpdateManyWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => SubscriptionScalarWhereInput, {
    nullable: false
  })
  where!: SubscriptionScalarWhereInput;

  @TypeGraphQL.Field(_type => SubscriptionUpdateManyMutationInput, {
    nullable: false
  })
  data!: SubscriptionUpdateManyMutationInput;
}
