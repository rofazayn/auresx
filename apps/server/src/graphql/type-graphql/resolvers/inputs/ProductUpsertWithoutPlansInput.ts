import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutPlansInput } from "../inputs/ProductCreateWithoutPlansInput";
import { ProductUpdateWithoutPlansInput } from "../inputs/ProductUpdateWithoutPlansInput";

@TypeGraphQL.InputType("ProductUpsertWithoutPlansInput", {
  isAbstract: true
})
export class ProductUpsertWithoutPlansInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutPlansInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutPlansInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutPlansInput, {
    nullable: false
  })
  create!: ProductCreateWithoutPlansInput;
}
