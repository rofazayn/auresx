import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneSubscriptionArgs } from "./args/UpsertOneSubscriptionArgs";
import { Subscription } from "../../../models/Subscription";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subscription)
export class UpsertOneSubscriptionResolver {
  @TypeGraphQL.Mutation(_returns => Subscription, {
    nullable: false
  })
  async upsertOneSubscription(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSubscriptionArgs): Promise<Subscription> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscription.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
