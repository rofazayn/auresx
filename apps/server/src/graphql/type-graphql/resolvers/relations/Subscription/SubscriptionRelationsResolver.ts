import * as TypeGraphQL from "type-graphql";
import { Product } from "../../../models/Product";
import { Subscription } from "../../../models/Subscription";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { SubscriptionTransactionsArgs } from "./args/SubscriptionTransactionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subscription)
export class SubscriptionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: false
  })
  async product(@TypeGraphQL.Root() subscription: Subscription, @TypeGraphQL.Ctx() ctx: any): Promise<Product> {
    return getPrismaFromContext(ctx).subscription.findUnique({
      where: {
        id: subscription.id,
      },
    }).product({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() subscription: Subscription, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).subscription.findUnique({
      where: {
        id: subscription.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [Transaction], {
    nullable: false
  })
  async transactions(@TypeGraphQL.Root() subscription: Subscription, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SubscriptionTransactionsArgs): Promise<Transaction[]> {
    return getPrismaFromContext(ctx).subscription.findUnique({
      where: {
        id: subscription.id,
      },
    }).transactions(args);
  }
}
