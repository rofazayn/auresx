import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutPlansInput } from "../inputs/ProductCreateOrConnectWithoutPlansInput";
import { ProductCreateWithoutPlansInput } from "../inputs/ProductCreateWithoutPlansInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutPlansInput", {
  isAbstract: true
})
export class ProductCreateNestedOneWithoutPlansInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutPlansInput, {
    nullable: true
  })
  create?: ProductCreateWithoutPlansInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutPlansInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutPlansInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
