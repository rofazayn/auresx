import * as TypeGraphQL from "type-graphql";
import { Plan } from "../../../models/Plan";
import { Product } from "../../../models/Product";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Plan)
export class PlanRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: false
  })
  async product(@TypeGraphQL.Root() plan: Plan, @TypeGraphQL.Ctx() ctx: any): Promise<Product> {
    return getPrismaFromContext(ctx).plan.findUnique({
      where: {
        id: plan.id,
      },
    }).product({});
  }
}
