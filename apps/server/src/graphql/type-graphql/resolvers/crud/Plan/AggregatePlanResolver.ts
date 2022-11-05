import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePlanArgs } from "./args/AggregatePlanArgs";
import { Plan } from "../../../models/Plan";
import { AggregatePlan } from "../../outputs/AggregatePlan";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Plan)
export class AggregatePlanResolver {
  @TypeGraphQL.Query(_returns => AggregatePlan, {
    nullable: false
  })
  async aggregatePlan(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePlanArgs): Promise<AggregatePlan> {
    return getPrismaFromContext(ctx).plan.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
