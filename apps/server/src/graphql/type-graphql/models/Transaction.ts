import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Subscription } from "../models/Subscription";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Transaction", {
  isAbstract: true
})
export class Transaction {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  amount!: number;

  user?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId?: string | null;

  subscription?: Subscription | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subscriptionId?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | null;
}
