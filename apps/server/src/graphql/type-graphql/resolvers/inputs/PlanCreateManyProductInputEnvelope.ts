import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlanCreateManyProductInput } from "../inputs/PlanCreateManyProductInput";

@TypeGraphQL.InputType("PlanCreateManyProductInputEnvelope", {
  isAbstract: true
})
export class PlanCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [PlanCreateManyProductInput], {
    nullable: false
  })
  data!: PlanCreateManyProductInput[];
}
