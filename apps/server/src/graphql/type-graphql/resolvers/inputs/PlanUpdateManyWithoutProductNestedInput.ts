import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlanCreateManyProductInputEnvelope } from "../inputs/PlanCreateManyProductInputEnvelope";
import { PlanCreateOrConnectWithoutProductInput } from "../inputs/PlanCreateOrConnectWithoutProductInput";
import { PlanCreateWithoutProductInput } from "../inputs/PlanCreateWithoutProductInput";
import { PlanScalarWhereInput } from "../inputs/PlanScalarWhereInput";
import { PlanUpdateManyWithWhereWithoutProductInput } from "../inputs/PlanUpdateManyWithWhereWithoutProductInput";
import { PlanUpdateWithWhereUniqueWithoutProductInput } from "../inputs/PlanUpdateWithWhereUniqueWithoutProductInput";
import { PlanUpsertWithWhereUniqueWithoutProductInput } from "../inputs/PlanUpsertWithWhereUniqueWithoutProductInput";
import { PlanWhereUniqueInput } from "../inputs/PlanWhereUniqueInput";

@TypeGraphQL.InputType("PlanUpdateManyWithoutProductNestedInput", {
  isAbstract: true
})
export class PlanUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [PlanCreateWithoutProductInput], {
    nullable: true
  })
  create?: PlanCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlanCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: PlanCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlanUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: PlanUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => PlanCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: PlanCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlanWhereUniqueInput], {
    nullable: true
  })
  set?: PlanWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlanWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PlanWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlanWhereUniqueInput], {
    nullable: true
  })
  delete?: PlanWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlanWhereUniqueInput], {
    nullable: true
  })
  connect?: PlanWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlanUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: PlanUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlanUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: PlanUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlanScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PlanScalarWhereInput[] | undefined;
}
