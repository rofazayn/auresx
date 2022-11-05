import * as TypeGraphQL from "type-graphql";
import { Plan } from "../../../models/Plan";
import { Product } from "../../../models/Product";
import { Subscription } from "../../../models/Subscription";
import { ProductPlansArgs } from "./args/ProductPlansArgs";
import { ProductSubscriptionsArgs } from "./args/ProductSubscriptionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class ProductRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Plan], {
    nullable: false
  })
  async plans(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductPlansArgs): Promise<Plan[]> {
    return getPrismaFromContext(ctx).product.findUnique({
      where: {
        id: product.id,
      },
    }).plans(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Subscription], {
    nullable: false
  })
  async subscriptions(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductSubscriptionsArgs): Promise<Subscription[]> {
    return getPrismaFromContext(ctx).product.findUnique({
      where: {
        id: product.id,
      },
    }).subscriptions(args);
  }
}
