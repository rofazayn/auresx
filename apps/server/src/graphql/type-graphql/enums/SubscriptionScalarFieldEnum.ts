import * as TypeGraphQL from "type-graphql";

export enum SubscriptionScalarFieldEnum {
  id = "id",
  productId = "productId",
  userId = "userId",
  totalPaid = "totalPaid",
  renewCounter = "renewCounter",
  expiryDate = "expiryDate",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(SubscriptionScalarFieldEnum, {
  name: "SubscriptionScalarFieldEnum",
  description: undefined,
});
