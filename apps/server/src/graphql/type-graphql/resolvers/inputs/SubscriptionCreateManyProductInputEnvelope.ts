import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateManyProductInput } from "../inputs/SubscriptionCreateManyProductInput";

@TypeGraphQL.InputType("SubscriptionCreateManyProductInputEnvelope", {
  isAbstract: true
})
export class SubscriptionCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [SubscriptionCreateManyProductInput], {
    nullable: false
  })
  data!: SubscriptionCreateManyProductInput[];
}
