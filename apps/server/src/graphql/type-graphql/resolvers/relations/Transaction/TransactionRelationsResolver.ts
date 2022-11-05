import * as TypeGraphQL from "type-graphql";
import { Subscription } from "../../../models/Subscription";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Transaction)
export class TransactionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Root() transaction: Transaction, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).transaction.findUnique({
      where: {
        id: transaction.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Subscription, {
    nullable: true
  })
  async subscription(@TypeGraphQL.Root() transaction: Transaction, @TypeGraphQL.Ctx() ctx: any): Promise<Subscription | null> {
    return getPrismaFromContext(ctx).transaction.findUnique({
      where: {
        id: transaction.id,
      },
    }).subscription({});
  }
}
