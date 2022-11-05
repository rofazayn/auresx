import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutSubscriptionsInput } from "../inputs/ProductCreateOrConnectWithoutSubscriptionsInput";
import { ProductCreateWithoutSubscriptionsInput } from "../inputs/ProductCreateWithoutSubscriptionsInput";
import { ProductUpdateWithoutSubscriptionsInput } from "../inputs/ProductUpdateWithoutSubscriptionsInput";
import { ProductUpsertWithoutSubscriptionsInput } from "../inputs/ProductUpsertWithoutSubscriptionsInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutSubscriptionsNestedInput", {
  isAbstract: true
})
export class ProductUpdateOneRequiredWithoutSubscriptionsNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutSubscriptionsInput, {
    nullable: true
  })
  create?: ProductCreateWithoutSubscriptionsInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutSubscriptionsInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutSubscriptionsInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutSubscriptionsInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutSubscriptionsInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutSubscriptionsInput, {
    nullable: true
  })
  update?: ProductUpdateWithoutSubscriptionsInput | undefined;
}
