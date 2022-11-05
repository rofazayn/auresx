import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  email = "email",
  name = "name",
  emailConfirmed = "emailConfirmed",
  password = "password",
  phoneNumber = "phoneNumber",
  country = "country",
  region = "region",
  city = "city",
  job = "job",
  preferredTheme = "preferredTheme",
  balance = "balance",
  bonus = "bonus",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
