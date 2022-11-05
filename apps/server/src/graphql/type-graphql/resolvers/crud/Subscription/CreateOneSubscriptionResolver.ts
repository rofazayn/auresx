import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneSubscriptionArgs } from "./args/CreateOneSubscriptionArgs";
import { Subscription } from "../../../models/Subscription";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subscription)
export class CreateOneSubscriptionResolver {
  @TypeGraphQL.Mutation(_returns => Subscription, {
    nullable: false
  })
  async createOneSubscription(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSubscriptionArgs): Promise<Subscription> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscription.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
