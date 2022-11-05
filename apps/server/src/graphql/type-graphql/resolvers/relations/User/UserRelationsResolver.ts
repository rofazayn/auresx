import * as TypeGraphQL from "type-graphql";
import { Subscription } from "../../../models/Subscription";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { UserSubscriptionsArgs } from "./args/UserSubscriptionsArgs";
import { UserTransactionsArgs } from "./args/UserTransactionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Subscription], {
    nullable: false
  })
  async subscriptions(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserSubscriptionsArgs): Promise<Subscription[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).subscriptions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Transaction], {
    nullable: false
  })
  async transactions(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTransactionsArgs): Promise<Transaction[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).transactions(args);
  }
}
