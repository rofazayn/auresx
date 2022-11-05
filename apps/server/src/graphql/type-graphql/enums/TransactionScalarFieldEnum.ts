import * as TypeGraphQL from "type-graphql";

export enum TransactionScalarFieldEnum {
  id = "id",
  type = "type",
  status = "status",
  message = "message",
  amount = "amount",
  userId = "userId",
  subscriptionId = "subscriptionId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(TransactionScalarFieldEnum, {
  name: "TransactionScalarFieldEnum",
  description: undefined,
});
