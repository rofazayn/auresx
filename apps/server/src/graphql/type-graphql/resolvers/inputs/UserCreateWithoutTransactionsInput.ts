import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateNestedManyWithoutUserInput } from "../inputs/SubscriptionCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutTransactionsInput", {
  isAbstract: true
})
export class UserCreateWithoutTransactionsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  emailConfirmed?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNumber?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  region?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  job?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  preferredTheme?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  balance?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  bonus?: number | undefined;

  @TypeGraphQL.Field(_type => SubscriptionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  subscriptions?: SubscriptionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
