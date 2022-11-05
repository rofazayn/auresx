import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutPlansInput } from "../inputs/ProductCreateOrConnectWithoutPlansInput";
import { ProductCreateWithoutPlansInput } from "../inputs/ProductCreateWithoutPlansInput";
import { ProductUpdateWithoutPlansInput } from "../inputs/ProductUpdateWithoutPlansInput";
import { ProductUpsertWithoutPlansInput } from "../inputs/ProductUpsertWithoutPlansInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutPlansNestedInput", {
  isAbstract: true
})
export class ProductUpdateOneRequiredWithoutPlansNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutPlansInput, {
    nullable: true
  })
  create?: ProductCreateWithoutPlansInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutPlansInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutPlansInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutPlansInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutPlansInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutPlansInput, {
    nullable: true
  })
  update?: ProductUpdateWithoutPlansInput | undefined;
}
