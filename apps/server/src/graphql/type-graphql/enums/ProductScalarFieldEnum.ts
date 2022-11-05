import * as TypeGraphQL from "type-graphql";

export enum ProductScalarFieldEnum {
  id = "id",
  name = "name",
  monthPrice = "monthPrice",
  trialDuration = "trialDuration",
  cancelDuration = "cancelDuration",
  description = "description",
  infoURL = "infoURL",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ProductScalarFieldEnum, {
  name: "ProductScalarFieldEnum",
  description: undefined,
});
