import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutSubscriptionsInput } from "../inputs/ProductCreateWithoutSubscriptionsInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutSubscriptionsInput", {
  isAbstract: true
})
export class ProductCreateOrConnectWithoutSubscriptionsInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutSubscriptionsInput, {
    nullable: false
  })
  create!: ProductCreateWithoutSubscriptionsInput;
}
