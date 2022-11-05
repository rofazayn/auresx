import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { ProductUpdateOneRequiredWithoutSubscriptionsNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutSubscriptionsNestedInput";
import { TransactionUpdateManyWithoutSubscriptionNestedInput } from "../inputs/TransactionUpdateManyWithoutSubscriptionNestedInput";

@TypeGraphQL.InputType("SubscriptionUpdateWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutSubscriptionsNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutSubscriptionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  totalPaid?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  renewCounter?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TransactionUpdateManyWithoutSubscriptionNestedInput, {
    nullable: true
  })
  transactions?: TransactionUpdateManyWithoutSubscriptionNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  expiryDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
