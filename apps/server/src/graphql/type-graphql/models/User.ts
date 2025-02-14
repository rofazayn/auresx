import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Subscription } from "../models/Subscription";
import { Transaction } from "../models/Transaction";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

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
  emailConfirmed?: boolean | null;

  password?: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNumber?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  region?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  job?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  preferredTheme?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  balance?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  bonus?: number | null;

  subscriptions?: Subscription[];

  transactions?: Transaction[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
