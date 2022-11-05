import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionCreateInput } from "../../../inputs/SubscriptionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSubscriptionArgs {
  @TypeGraphQL.Field(_type => SubscriptionCreateInput, {
    nullable: false
  })
  data!: SubscriptionCreateInput;
}
