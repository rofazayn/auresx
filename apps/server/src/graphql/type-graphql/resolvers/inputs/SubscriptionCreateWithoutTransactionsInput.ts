import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutSubscriptionsInput } from "../inputs/ProductCreateNestedOneWithoutSubscriptionsInput";
import { UserCreateNestedOneWithoutSubscriptionsInput } from "../inputs/UserCreateNestedOneWithoutSubscriptionsInput";

@TypeGraphQL.InputType("SubscriptionCreateWithoutTransactionsInput", {
  isAbstract: true
})
export class SubscriptionCreateWithoutTransactionsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutSubscriptionsInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutSubscriptionsInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSubscriptionsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutSubscriptionsInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  totalPaid?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  renewCounter?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expiryDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
