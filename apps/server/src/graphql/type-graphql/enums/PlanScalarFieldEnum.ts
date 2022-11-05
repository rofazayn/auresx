import * as TypeGraphQL from "type-graphql";

export enum PlanScalarFieldEnum {
  id = "id",
  name = "name",
  pricePerMonth = "pricePerMonth",
  details = "details",
  productId = "productId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(PlanScalarFieldEnum, {
  name: "PlanScalarFieldEnum",
  description: undefined,
});
