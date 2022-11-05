import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutSubscriptionsInput } from "../inputs/ProductCreateWithoutSubscriptionsInput";
import { ProductUpdateWithoutSubscriptionsInput } from "../inputs/ProductUpdateWithoutSubscriptionsInput";

@TypeGraphQL.InputType("ProductUpsertWithoutSubscriptionsInput", {
  isAbstract: true
})
export class ProductUpsertWithoutSubscriptionsInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutSubscriptionsInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutSubscriptionsInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutSubscriptionsInput, {
    nullable: false
  })
  create!: ProductCreateWithoutSubscriptionsInput;
}
