import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlanCreateManyProductInputEnvelope } from "../inputs/PlanCreateManyProductInputEnvelope";
import { PlanCreateOrConnectWithoutProductInput } from "../inputs/PlanCreateOrConnectWithoutProductInput";
import { PlanCreateWithoutProductInput } from "../inputs/PlanCreateWithoutProductInput";
import { PlanWhereUniqueInput } from "../inputs/PlanWhereUniqueInput";

@TypeGraphQL.InputType("PlanCreateNestedManyWithoutProductInput", {
  isAbstract: true
})
export class PlanCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [PlanCreateWithoutProductInput], {
    nullable: true
  })
  create?: PlanCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlanCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: PlanCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => PlanCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: PlanCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlanWhereUniqueInput], {
    nullable: true
  })
  connect?: PlanWhereUniqueInput[] | undefined;
}
