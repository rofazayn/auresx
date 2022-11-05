import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Product } from "../models/Product";
import { Transaction } from "../models/Transaction";
import { User } from "../models/User";
import { SubscriptionCount } from "../resolvers/outputs/SubscriptionCount";

@TypeGraphQL.ObjectType("Subscription", {
  isAbstract: true
})
export class Subscription {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  product?: Product;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  productId!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  totalPaid!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  renewCounter!: number;

  transactions?: Transaction[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expiryDate?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => SubscriptionCount, {
    nullable: true
  })
  _count?: SubscriptionCount | null;
}
