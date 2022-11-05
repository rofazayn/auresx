import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregatePlan = {
  __typename?: 'AggregatePlan';
  _avg?: Maybe<PlanAvgAggregate>;
  _count?: Maybe<PlanCountAggregate>;
  _max?: Maybe<PlanMaxAggregate>;
  _min?: Maybe<PlanMinAggregate>;
  _sum?: Maybe<PlanSumAggregate>;
};

export type AggregateProduct = {
  __typename?: 'AggregateProduct';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
};

export type AggregateSubscription = {
  __typename?: 'AggregateSubscription';
  _avg?: Maybe<SubscriptionAvgAggregate>;
  _count?: Maybe<SubscriptionCountAggregate>;
  _max?: Maybe<SubscriptionMaxAggregate>;
  _min?: Maybe<SubscriptionMinAggregate>;
  _sum?: Maybe<SubscriptionSumAggregate>;
};

export type AggregateTransaction = {
  __typename?: 'AggregateTransaction';
  _avg?: Maybe<TransactionAvgAggregate>;
  _count?: Maybe<TransactionCountAggregate>;
  _max?: Maybe<TransactionMaxAggregate>;
  _min?: Maybe<TransactionMinAggregate>;
  _sum?: Maybe<TransactionSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type BoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyPlan: AffectedRowsOutput;
  createManyProduct: AffectedRowsOutput;
  createManySubscription: AffectedRowsOutput;
  createManyTransaction: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOnePlan: Plan;
  createOneProduct: Product;
  createOneSubscription: Subscription;
  createOneTransaction: Transaction;
  createOneUser: User;
  deleteManyPlan: AffectedRowsOutput;
  deleteManyProduct: AffectedRowsOutput;
  deleteManySubscription: AffectedRowsOutput;
  deleteManyTransaction: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOnePlan?: Maybe<Plan>;
  deleteOneProduct?: Maybe<Product>;
  deleteOneSubscription?: Maybe<Subscription>;
  deleteOneTransaction?: Maybe<Transaction>;
  deleteOneUser?: Maybe<User>;
  login: AuthResponse;
  logout: Scalars['Boolean'];
  refresh: RefreshTokensResponse;
  register: AuthResponse;
  sendEmailConfirmation: Scalars['Boolean'];
  updateManyPlan: AffectedRowsOutput;
  updateManyProduct: AffectedRowsOutput;
  updateManySubscription: AffectedRowsOutput;
  updateManyTransaction: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOnePlan?: Maybe<Plan>;
  updateOneProduct?: Maybe<Product>;
  updateOneSubscription?: Maybe<Subscription>;
  updateOneTransaction?: Maybe<Transaction>;
  updateOneUser?: Maybe<User>;
  upsertOnePlan: Plan;
  upsertOneProduct: Product;
  upsertOneSubscription: Subscription;
  upsertOneTransaction: Transaction;
  upsertOneUser: User;
};


export type MutationCreateManyPlanArgs = {
  data: Array<PlanCreateManyInput>;
};


export type MutationCreateManyProductArgs = {
  data: Array<ProductCreateManyInput>;
};


export type MutationCreateManySubscriptionArgs = {
  data: Array<SubscriptionCreateManyInput>;
};


export type MutationCreateManyTransactionArgs = {
  data: Array<TransactionCreateManyInput>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
};


export type MutationCreateOnePlanArgs = {
  data: PlanCreateInput;
};


export type MutationCreateOneProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateOneSubscriptionArgs = {
  data: SubscriptionCreateInput;
};


export type MutationCreateOneTransactionArgs = {
  data: TransactionCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyPlanArgs = {
  where?: InputMaybe<PlanWhereInput>;
};


export type MutationDeleteManyProductArgs = {
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationDeleteManySubscriptionArgs = {
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type MutationDeleteManyTransactionArgs = {
  where?: InputMaybe<TransactionWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOnePlanArgs = {
  where: PlanWhereUniqueInput;
};


export type MutationDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteOneSubscriptionArgs = {
  where: SubscriptionWhereUniqueInput;
};


export type MutationDeleteOneTransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateManyPlanArgs = {
  data: PlanUpdateManyMutationInput;
  where?: InputMaybe<PlanWhereInput>;
};


export type MutationUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationUpdateManySubscriptionArgs = {
  data: SubscriptionUpdateManyMutationInput;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type MutationUpdateManyTransactionArgs = {
  data: TransactionUpdateManyMutationInput;
  where?: InputMaybe<TransactionWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOnePlanArgs = {
  data: PlanUpdateInput;
  where: PlanWhereUniqueInput;
};


export type MutationUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateOneSubscriptionArgs = {
  data: SubscriptionUpdateInput;
  where: SubscriptionWhereUniqueInput;
};


export type MutationUpdateOneTransactionArgs = {
  data: TransactionUpdateInput;
  where: TransactionWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOnePlanArgs = {
  create: PlanCreateInput;
  update: PlanUpdateInput;
  where: PlanWhereUniqueInput;
};


export type MutationUpsertOneProductArgs = {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertOneSubscriptionArgs = {
  create: SubscriptionCreateInput;
  update: SubscriptionUpdateInput;
  where: SubscriptionWhereUniqueInput;
};


export type MutationUpsertOneTransactionArgs = {
  create: TransactionCreateInput;
  update: TransactionUpdateInput;
  where: TransactionWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedBoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
  unset?: InputMaybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
  unset?: InputMaybe<Scalars['Boolean']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
  unset?: InputMaybe<Scalars['Boolean']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
  unset?: InputMaybe<Scalars['Boolean']>;
};

export type Plan = {
  __typename?: 'Plan';
  createdAt?: Maybe<Scalars['DateTime']>;
  details: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  pricePerMonth: Scalars['Float'];
  product: Product;
  productId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlanAvgAggregate = {
  __typename?: 'PlanAvgAggregate';
  pricePerMonth?: Maybe<Scalars['Float']>;
};

export type PlanAvgOrderByAggregateInput = {
  pricePerMonth?: InputMaybe<SortOrder>;
};

export type PlanCountAggregate = {
  __typename?: 'PlanCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  details: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  pricePerMonth: Scalars['Int'];
  productId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type PlanCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pricePerMonth?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PlanCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  pricePerMonth?: InputMaybe<Scalars['Float']>;
  product: ProductCreateNestedOneWithoutPlansInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PlanCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  pricePerMonth?: InputMaybe<Scalars['Float']>;
  productId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PlanCreateManyProductInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  pricePerMonth?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PlanCreateManyProductInputEnvelope = {
  data: Array<PlanCreateManyProductInput>;
};

export type PlanCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<PlanWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlanCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<PlanCreateWithoutProductInput>>;
  createMany?: InputMaybe<PlanCreateManyProductInputEnvelope>;
};

export type PlanCreateOrConnectWithoutProductInput = {
  create: PlanCreateWithoutProductInput;
  where: PlanWhereUniqueInput;
};

export type PlanCreateWithoutProductInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  pricePerMonth?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PlanGroupBy = {
  __typename?: 'PlanGroupBy';
  _avg?: Maybe<PlanAvgAggregate>;
  _count?: Maybe<PlanCountAggregate>;
  _max?: Maybe<PlanMaxAggregate>;
  _min?: Maybe<PlanMinAggregate>;
  _sum?: Maybe<PlanSumAggregate>;
  createdAt?: Maybe<Scalars['DateTime']>;
  details: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  pricePerMonth: Scalars['Float'];
  productId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlanListRelationFilter = {
  every?: InputMaybe<PlanWhereInput>;
  none?: InputMaybe<PlanWhereInput>;
  some?: InputMaybe<PlanWhereInput>;
};

export type PlanMaxAggregate = {
  __typename?: 'PlanMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  pricePerMonth?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlanMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pricePerMonth?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PlanMinAggregate = {
  __typename?: 'PlanMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  pricePerMonth?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlanMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pricePerMonth?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PlanOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PlanOrderByWithAggregationInput = {
  _avg?: InputMaybe<PlanAvgOrderByAggregateInput>;
  _count?: InputMaybe<PlanCountOrderByAggregateInput>;
  _max?: InputMaybe<PlanMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlanMinOrderByAggregateInput>;
  _sum?: InputMaybe<PlanSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pricePerMonth?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PlanOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pricePerMonth?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PlanScalarFieldEnum {
  CreatedAt = 'createdAt',
  Details = 'details',
  Id = 'id',
  Name = 'name',
  PricePerMonth = 'pricePerMonth',
  ProductId = 'productId',
  UpdatedAt = 'updatedAt'
}

export type PlanScalarWhereInput = {
  AND?: InputMaybe<Array<PlanScalarWhereInput>>;
  NOT?: InputMaybe<Array<PlanScalarWhereInput>>;
  OR?: InputMaybe<Array<PlanScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  details?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  pricePerMonth?: InputMaybe<FloatFilter>;
  productId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type PlanScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlanScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PlanScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlanScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  details?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  pricePerMonth?: InputMaybe<FloatWithAggregatesFilter>;
  productId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
};

export type PlanSumAggregate = {
  __typename?: 'PlanSumAggregate';
  pricePerMonth?: Maybe<Scalars['Float']>;
};

export type PlanSumOrderByAggregateInput = {
  pricePerMonth?: InputMaybe<SortOrder>;
};

export type PlanUpdateInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pricePerMonth?: InputMaybe<FloatFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutPlansNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type PlanUpdateManyMutationInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pricePerMonth?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type PlanUpdateManyWithWhereWithoutProductInput = {
  data: PlanUpdateManyMutationInput;
  where: PlanScalarWhereInput;
};

export type PlanUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<PlanWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlanCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<PlanCreateWithoutProductInput>>;
  createMany?: InputMaybe<PlanCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<PlanWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlanScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlanWhereUniqueInput>>;
  set?: InputMaybe<Array<PlanWhereUniqueInput>>;
  update?: InputMaybe<Array<PlanUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<PlanUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<PlanUpsertWithWhereUniqueWithoutProductInput>>;
};

export type PlanUpdateWithWhereUniqueWithoutProductInput = {
  data: PlanUpdateWithoutProductInput;
  where: PlanWhereUniqueInput;
};

export type PlanUpdateWithoutProductInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pricePerMonth?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type PlanUpsertWithWhereUniqueWithoutProductInput = {
  create: PlanCreateWithoutProductInput;
  update: PlanUpdateWithoutProductInput;
  where: PlanWhereUniqueInput;
};

export type PlanWhereInput = {
  AND?: InputMaybe<Array<PlanWhereInput>>;
  NOT?: InputMaybe<Array<PlanWhereInput>>;
  OR?: InputMaybe<Array<PlanWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  details?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  pricePerMonth?: InputMaybe<FloatFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type PlanWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  _count?: Maybe<ProductCount>;
  cancelDuration: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  infoURL?: Maybe<Scalars['String']>;
  monthPrice: Scalars['Float'];
  name: Scalars['String'];
  plans: Array<Plan>;
  subscriptions: Array<Subscription>;
  trialDuration: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ProductPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlanScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlanOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlanWhereInput>;
};


export type ProductSubscriptionsArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  cancelDuration?: Maybe<Scalars['Float']>;
  monthPrice?: Maybe<Scalars['Float']>;
  trialDuration?: Maybe<Scalars['Float']>;
};

export type ProductAvgOrderByAggregateInput = {
  cancelDuration?: InputMaybe<SortOrder>;
  monthPrice?: InputMaybe<SortOrder>;
  trialDuration?: InputMaybe<SortOrder>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  plans: Scalars['Int'];
  subscriptions: Scalars['Int'];
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int'];
  cancelDuration: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  infoURL: Scalars['Int'];
  monthPrice: Scalars['Int'];
  name: Scalars['Int'];
  trialDuration: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ProductCountOrderByAggregateInput = {
  cancelDuration?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  infoURL?: InputMaybe<SortOrder>;
  monthPrice?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  trialDuration?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductCreateInput = {
  cancelDuration?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoURL?: InputMaybe<Scalars['String']>;
  monthPrice?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  plans?: InputMaybe<PlanCreateNestedManyWithoutProductInput>;
  subscriptions?: InputMaybe<SubscriptionCreateNestedManyWithoutProductInput>;
  trialDuration?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductCreateManyInput = {
  cancelDuration?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoURL?: InputMaybe<Scalars['String']>;
  monthPrice?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  trialDuration?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductCreateNestedOneWithoutPlansInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutPlansInput>;
  create?: InputMaybe<ProductCreateWithoutPlansInput>;
};

export type ProductCreateNestedOneWithoutSubscriptionsInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutSubscriptionsInput>;
  create?: InputMaybe<ProductCreateWithoutSubscriptionsInput>;
};

export type ProductCreateOrConnectWithoutPlansInput = {
  create: ProductCreateWithoutPlansInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutSubscriptionsInput = {
  create: ProductCreateWithoutSubscriptionsInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutPlansInput = {
  cancelDuration?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoURL?: InputMaybe<Scalars['String']>;
  monthPrice?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  subscriptions?: InputMaybe<SubscriptionCreateNestedManyWithoutProductInput>;
  trialDuration?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductCreateWithoutSubscriptionsInput = {
  cancelDuration?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  infoURL?: InputMaybe<Scalars['String']>;
  monthPrice?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  plans?: InputMaybe<PlanCreateNestedManyWithoutProductInput>;
  trialDuration?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
  cancelDuration: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  infoURL?: Maybe<Scalars['String']>;
  monthPrice: Scalars['Float'];
  name: Scalars['String'];
  trialDuration: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  cancelDuration?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  infoURL?: Maybe<Scalars['String']>;
  monthPrice?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  trialDuration?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductMaxOrderByAggregateInput = {
  cancelDuration?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  infoURL?: InputMaybe<SortOrder>;
  monthPrice?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  trialDuration?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  cancelDuration?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  infoURL?: Maybe<Scalars['String']>;
  monthPrice?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  trialDuration?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductMinOrderByAggregateInput = {
  cancelDuration?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  infoURL?: InputMaybe<SortOrder>;
  monthPrice?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  trialDuration?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProductAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProductCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProductSumOrderByAggregateInput>;
  cancelDuration?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  infoURL?: InputMaybe<SortOrder>;
  monthPrice?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  trialDuration?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  cancelDuration?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  infoURL?: InputMaybe<SortOrder>;
  monthPrice?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  plans?: InputMaybe<PlanOrderByRelationAggregateInput>;
  subscriptions?: InputMaybe<SubscriptionOrderByRelationAggregateInput>;
  trialDuration?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductRelationFilter = {
  is?: InputMaybe<ProductWhereInput>;
  isNot?: InputMaybe<ProductWhereInput>;
};

export enum ProductScalarFieldEnum {
  CancelDuration = 'cancelDuration',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  InfoUrl = 'infoURL',
  MonthPrice = 'monthPrice',
  Name = 'name',
  TrialDuration = 'trialDuration',
  UpdatedAt = 'updatedAt'
}

export type ProductScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  cancelDuration?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  infoURL?: InputMaybe<StringNullableWithAggregatesFilter>;
  monthPrice?: InputMaybe<FloatWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  trialDuration?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  cancelDuration?: Maybe<Scalars['Int']>;
  monthPrice?: Maybe<Scalars['Float']>;
  trialDuration?: Maybe<Scalars['Int']>;
};

export type ProductSumOrderByAggregateInput = {
  cancelDuration?: InputMaybe<SortOrder>;
  monthPrice?: InputMaybe<SortOrder>;
  trialDuration?: InputMaybe<SortOrder>;
};

export type ProductUpdateInput = {
  cancelDuration?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  infoURL?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  monthPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  plans?: InputMaybe<PlanUpdateManyWithoutProductNestedInput>;
  subscriptions?: InputMaybe<SubscriptionUpdateManyWithoutProductNestedInput>;
  trialDuration?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateManyMutationInput = {
  cancelDuration?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  infoURL?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  monthPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  trialDuration?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateOneRequiredWithoutPlansNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutPlansInput>;
  create?: InputMaybe<ProductCreateWithoutPlansInput>;
  update?: InputMaybe<ProductUpdateWithoutPlansInput>;
  upsert?: InputMaybe<ProductUpsertWithoutPlansInput>;
};

export type ProductUpdateOneRequiredWithoutSubscriptionsNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutSubscriptionsInput>;
  create?: InputMaybe<ProductCreateWithoutSubscriptionsInput>;
  update?: InputMaybe<ProductUpdateWithoutSubscriptionsInput>;
  upsert?: InputMaybe<ProductUpsertWithoutSubscriptionsInput>;
};

export type ProductUpdateWithoutPlansInput = {
  cancelDuration?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  infoURL?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  monthPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscriptions?: InputMaybe<SubscriptionUpdateManyWithoutProductNestedInput>;
  trialDuration?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutSubscriptionsInput = {
  cancelDuration?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  infoURL?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  monthPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  plans?: InputMaybe<PlanUpdateManyWithoutProductNestedInput>;
  trialDuration?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ProductUpsertWithoutPlansInput = {
  create: ProductCreateWithoutPlansInput;
  update: ProductUpdateWithoutPlansInput;
};

export type ProductUpsertWithoutSubscriptionsInput = {
  create: ProductCreateWithoutSubscriptionsInput;
  update: ProductUpdateWithoutSubscriptionsInput;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  cancelDuration?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  infoURL?: InputMaybe<StringNullableFilter>;
  monthPrice?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  plans?: InputMaybe<PlanListRelationFilter>;
  subscriptions?: InputMaybe<SubscriptionListRelationFilter>;
  trialDuration?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregatePlan: AggregatePlan;
  aggregateProduct: AggregateProduct;
  aggregateSubscription: AggregateSubscription;
  aggregateTransaction: AggregateTransaction;
  aggregateUser: AggregateUser;
  findFirstPlan?: Maybe<Plan>;
  findFirstProduct?: Maybe<Product>;
  findFirstSubscription?: Maybe<Subscription>;
  findFirstTransaction?: Maybe<Transaction>;
  findFirstUser?: Maybe<User>;
  groupByPlan: Array<PlanGroupBy>;
  groupByProduct: Array<ProductGroupBy>;
  groupBySubscription: Array<SubscriptionGroupBy>;
  groupByTransaction: Array<TransactionGroupBy>;
  groupByUser: Array<UserGroupBy>;
  hello: Scalars['String'];
  plan?: Maybe<Plan>;
  plans: Array<Plan>;
  product?: Maybe<Product>;
  products: Array<Product>;
  profile?: Maybe<User>;
  subscription?: Maybe<Subscription>;
  subscriptions: Array<Subscription>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregatePlanArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PlanOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlanWhereInput>;
};


export type QueryAggregateProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryAggregateSubscriptionArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type QueryAggregateTransactionArgs = {
  cursor?: InputMaybe<TransactionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TransactionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstPlanArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlanScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlanOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlanWhereInput>;
};


export type QueryFindFirstProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryFindFirstSubscriptionArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type QueryFindFirstTransactionArgs = {
  cursor?: InputMaybe<TransactionWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByPlanArgs = {
  by: Array<PlanScalarFieldEnum>;
  having?: InputMaybe<PlanScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlanOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlanWhereInput>;
};


export type QueryGroupByProductArgs = {
  by: Array<ProductScalarFieldEnum>;
  having?: InputMaybe<ProductScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryGroupBySubscriptionArgs = {
  by: Array<SubscriptionScalarFieldEnum>;
  having?: InputMaybe<SubscriptionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type QueryGroupByTransactionArgs = {
  by: Array<TransactionScalarFieldEnum>;
  having?: InputMaybe<TransactionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TransactionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryPlanArgs = {
  where: PlanWhereUniqueInput;
};


export type QueryPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlanScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlanOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlanWhereInput>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QuerySubscriptionArgs = {
  where: SubscriptionWhereUniqueInput;
};


export type QuerySubscriptionsArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type QueryTransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type QueryTransactionsArgs = {
  cursor?: InputMaybe<TransactionWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RefreshTokensResponse = {
  __typename?: 'RefreshTokensResponse';
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _count?: Maybe<SubscriptionCount>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expiryDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  product: Product;
  productId: Scalars['String'];
  renewCounter: Scalars['Int'];
  totalPaid: Scalars['Float'];
  transactions: Array<Transaction>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
  userId: Scalars['String'];
};


export type SubscriptionTransactionsArgs = {
  cursor?: InputMaybe<TransactionWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};

export type SubscriptionAvgAggregate = {
  __typename?: 'SubscriptionAvgAggregate';
  renewCounter?: Maybe<Scalars['Float']>;
  totalPaid?: Maybe<Scalars['Float']>;
};

export type SubscriptionAvgOrderByAggregateInput = {
  renewCounter?: InputMaybe<SortOrder>;
  totalPaid?: InputMaybe<SortOrder>;
};

export type SubscriptionCount = {
  __typename?: 'SubscriptionCount';
  transactions: Scalars['Int'];
};

export type SubscriptionCountAggregate = {
  __typename?: 'SubscriptionCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  expiryDate: Scalars['Int'];
  id: Scalars['Int'];
  productId: Scalars['Int'];
  renewCounter: Scalars['Int'];
  totalPaid: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SubscriptionCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiryDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  renewCounter?: InputMaybe<SortOrder>;
  totalPaid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SubscriptionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutSubscriptionsInput;
  renewCounter?: InputMaybe<Scalars['Int']>;
  totalPaid?: InputMaybe<Scalars['Float']>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutSubscriptionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutSubscriptionsInput;
};

export type SubscriptionCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  renewCounter?: InputMaybe<Scalars['Int']>;
  totalPaid?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type SubscriptionCreateManyProductInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  renewCounter?: InputMaybe<Scalars['Int']>;
  totalPaid?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type SubscriptionCreateManyProductInputEnvelope = {
  data: Array<SubscriptionCreateManyProductInput>;
};

export type SubscriptionCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  renewCounter?: InputMaybe<Scalars['Int']>;
  totalPaid?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubscriptionCreateManyUserInputEnvelope = {
  data: Array<SubscriptionCreateManyUserInput>;
};

export type SubscriptionCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubscriptionCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<SubscriptionCreateWithoutProductInput>>;
  createMany?: InputMaybe<SubscriptionCreateManyProductInputEnvelope>;
};

export type SubscriptionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubscriptionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SubscriptionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SubscriptionCreateManyUserInputEnvelope>;
};

export type SubscriptionCreateNestedOneWithoutTransactionsInput = {
  connect?: InputMaybe<SubscriptionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubscriptionCreateOrConnectWithoutTransactionsInput>;
  create?: InputMaybe<SubscriptionCreateWithoutTransactionsInput>;
};

export type SubscriptionCreateOrConnectWithoutProductInput = {
  create: SubscriptionCreateWithoutProductInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionCreateOrConnectWithoutTransactionsInput = {
  create: SubscriptionCreateWithoutTransactionsInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionCreateOrConnectWithoutUserInput = {
  create: SubscriptionCreateWithoutUserInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionCreateWithoutProductInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  renewCounter?: InputMaybe<Scalars['Int']>;
  totalPaid?: InputMaybe<Scalars['Float']>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutSubscriptionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutSubscriptionsInput;
};

export type SubscriptionCreateWithoutTransactionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutSubscriptionsInput;
  renewCounter?: InputMaybe<Scalars['Int']>;
  totalPaid?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutSubscriptionsInput;
};

export type SubscriptionCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutSubscriptionsInput;
  renewCounter?: InputMaybe<Scalars['Int']>;
  totalPaid?: InputMaybe<Scalars['Float']>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutSubscriptionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubscriptionGroupBy = {
  __typename?: 'SubscriptionGroupBy';
  _avg?: Maybe<SubscriptionAvgAggregate>;
  _count?: Maybe<SubscriptionCountAggregate>;
  _max?: Maybe<SubscriptionMaxAggregate>;
  _min?: Maybe<SubscriptionMinAggregate>;
  _sum?: Maybe<SubscriptionSumAggregate>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expiryDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  productId: Scalars['String'];
  renewCounter: Scalars['Int'];
  totalPaid: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type SubscriptionListRelationFilter = {
  every?: InputMaybe<SubscriptionWhereInput>;
  none?: InputMaybe<SubscriptionWhereInput>;
  some?: InputMaybe<SubscriptionWhereInput>;
};

export type SubscriptionMaxAggregate = {
  __typename?: 'SubscriptionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  expiryDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  renewCounter?: Maybe<Scalars['Int']>;
  totalPaid?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type SubscriptionMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiryDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  renewCounter?: InputMaybe<SortOrder>;
  totalPaid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SubscriptionMinAggregate = {
  __typename?: 'SubscriptionMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  expiryDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  renewCounter?: Maybe<Scalars['Int']>;
  totalPaid?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type SubscriptionMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiryDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  renewCounter?: InputMaybe<SortOrder>;
  totalPaid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SubscriptionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SubscriptionOrderByWithAggregationInput = {
  _avg?: InputMaybe<SubscriptionAvgOrderByAggregateInput>;
  _count?: InputMaybe<SubscriptionCountOrderByAggregateInput>;
  _max?: InputMaybe<SubscriptionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SubscriptionMinOrderByAggregateInput>;
  _sum?: InputMaybe<SubscriptionSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  expiryDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  renewCounter?: InputMaybe<SortOrder>;
  totalPaid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SubscriptionOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiryDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  renewCounter?: InputMaybe<SortOrder>;
  totalPaid?: InputMaybe<SortOrder>;
  transactions?: InputMaybe<TransactionOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type SubscriptionRelationFilter = {
  is?: InputMaybe<SubscriptionWhereInput>;
  isNot?: InputMaybe<SubscriptionWhereInput>;
};

export enum SubscriptionScalarFieldEnum {
  CreatedAt = 'createdAt',
  ExpiryDate = 'expiryDate',
  Id = 'id',
  ProductId = 'productId',
  RenewCounter = 'renewCounter',
  TotalPaid = 'totalPaid',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type SubscriptionScalarWhereInput = {
  AND?: InputMaybe<Array<SubscriptionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SubscriptionScalarWhereInput>>;
  OR?: InputMaybe<Array<SubscriptionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  expiryDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  renewCounter?: InputMaybe<IntFilter>;
  totalPaid?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SubscriptionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SubscriptionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SubscriptionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SubscriptionScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  expiryDate?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  productId?: InputMaybe<StringWithAggregatesFilter>;
  renewCounter?: InputMaybe<IntWithAggregatesFilter>;
  totalPaid?: InputMaybe<FloatWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SubscriptionSumAggregate = {
  __typename?: 'SubscriptionSumAggregate';
  renewCounter?: Maybe<Scalars['Int']>;
  totalPaid?: Maybe<Scalars['Float']>;
};

export type SubscriptionSumOrderByAggregateInput = {
  renewCounter?: InputMaybe<SortOrder>;
  totalPaid?: InputMaybe<SortOrder>;
};

export type SubscriptionUpdateInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutSubscriptionsNestedInput>;
  renewCounter?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalPaid?: InputMaybe<FloatFieldUpdateOperationsInput>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutSubscriptionNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSubscriptionsNestedInput>;
};

export type SubscriptionUpdateManyMutationInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  renewCounter?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalPaid?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type SubscriptionUpdateManyWithWhereWithoutProductInput = {
  data: SubscriptionUpdateManyMutationInput;
  where: SubscriptionScalarWhereInput;
};

export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
  data: SubscriptionUpdateManyMutationInput;
  where: SubscriptionScalarWhereInput;
};

export type SubscriptionUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubscriptionCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<SubscriptionCreateWithoutProductInput>>;
  createMany?: InputMaybe<SubscriptionCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SubscriptionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  set?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  update?: InputMaybe<Array<SubscriptionUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<SubscriptionUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<SubscriptionUpsertWithWhereUniqueWithoutProductInput>>;
};

export type SubscriptionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubscriptionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SubscriptionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SubscriptionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SubscriptionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  set?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  update?: InputMaybe<Array<SubscriptionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SubscriptionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SubscriptionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SubscriptionUpdateOneWithoutTransactionsNestedInput = {
  connect?: InputMaybe<SubscriptionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubscriptionCreateOrConnectWithoutTransactionsInput>;
  create?: InputMaybe<SubscriptionCreateWithoutTransactionsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<SubscriptionUpdateWithoutTransactionsInput>;
  upsert?: InputMaybe<SubscriptionUpsertWithoutTransactionsInput>;
};

export type SubscriptionUpdateWithWhereUniqueWithoutProductInput = {
  data: SubscriptionUpdateWithoutProductInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
  data: SubscriptionUpdateWithoutUserInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionUpdateWithoutProductInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  renewCounter?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalPaid?: InputMaybe<FloatFieldUpdateOperationsInput>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutSubscriptionNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSubscriptionsNestedInput>;
};

export type SubscriptionUpdateWithoutTransactionsInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutSubscriptionsNestedInput>;
  renewCounter?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalPaid?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSubscriptionsNestedInput>;
};

export type SubscriptionUpdateWithoutUserInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutSubscriptionsNestedInput>;
  renewCounter?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalPaid?: InputMaybe<FloatFieldUpdateOperationsInput>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutSubscriptionNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type SubscriptionUpsertWithWhereUniqueWithoutProductInput = {
  create: SubscriptionCreateWithoutProductInput;
  update: SubscriptionUpdateWithoutProductInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
  create: SubscriptionCreateWithoutUserInput;
  update: SubscriptionUpdateWithoutUserInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionUpsertWithoutTransactionsInput = {
  create: SubscriptionCreateWithoutTransactionsInput;
  update: SubscriptionUpdateWithoutTransactionsInput;
};

export type SubscriptionWhereInput = {
  AND?: InputMaybe<Array<SubscriptionWhereInput>>;
  NOT?: InputMaybe<Array<SubscriptionWhereInput>>;
  OR?: InputMaybe<Array<SubscriptionWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  expiryDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  renewCounter?: InputMaybe<IntFilter>;
  totalPaid?: InputMaybe<FloatFilter>;
  transactions?: InputMaybe<TransactionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SubscriptionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  amount: Scalars['Float'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  subscription?: Maybe<Subscription>;
  subscriptionId?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type TransactionAvgAggregate = {
  __typename?: 'TransactionAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
};

export type TransactionAvgOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
};

export type TransactionCountAggregate = {
  __typename?: 'TransactionCountAggregate';
  _all: Scalars['Int'];
  amount: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  message: Scalars['Int'];
  status: Scalars['Int'];
  subscriptionId: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type TransactionCountOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  subscriptionId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TransactionCreateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutTransactionsInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutTransactionsInput>;
};

export type TransactionCreateManyInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subscriptionId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type TransactionCreateManySubscriptionInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type TransactionCreateManySubscriptionInputEnvelope = {
  data: Array<TransactionCreateManySubscriptionInput>;
};

export type TransactionCreateManyUserInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subscriptionId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TransactionCreateManyUserInputEnvelope = {
  data: Array<TransactionCreateManyUserInput>;
};

export type TransactionCreateNestedManyWithoutSubscriptionInput = {
  connect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionCreateOrConnectWithoutSubscriptionInput>>;
  create?: InputMaybe<Array<TransactionCreateWithoutSubscriptionInput>>;
  createMany?: InputMaybe<TransactionCreateManySubscriptionInputEnvelope>;
};

export type TransactionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TransactionCreateWithoutUserInput>>;
  createMany?: InputMaybe<TransactionCreateManyUserInputEnvelope>;
};

export type TransactionCreateOrConnectWithoutSubscriptionInput = {
  create: TransactionCreateWithoutSubscriptionInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateOrConnectWithoutUserInput = {
  create: TransactionCreateWithoutUserInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateWithoutSubscriptionInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutTransactionsInput>;
};

export type TransactionCreateWithoutUserInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutTransactionsInput>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TransactionGroupBy = {
  __typename?: 'TransactionGroupBy';
  _avg?: Maybe<TransactionAvgAggregate>;
  _count?: Maybe<TransactionCountAggregate>;
  _max?: Maybe<TransactionMaxAggregate>;
  _min?: Maybe<TransactionMinAggregate>;
  _sum?: Maybe<TransactionSumAggregate>;
  amount: Scalars['Float'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  subscriptionId?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type TransactionListRelationFilter = {
  every?: InputMaybe<TransactionWhereInput>;
  none?: InputMaybe<TransactionWhereInput>;
  some?: InputMaybe<TransactionWhereInput>;
};

export type TransactionMaxAggregate = {
  __typename?: 'TransactionMaxAggregate';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type TransactionMaxOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  subscriptionId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TransactionMinAggregate = {
  __typename?: 'TransactionMinAggregate';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type TransactionMinOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  subscriptionId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TransactionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TransactionOrderByWithAggregationInput = {
  _avg?: InputMaybe<TransactionAvgOrderByAggregateInput>;
  _count?: InputMaybe<TransactionCountOrderByAggregateInput>;
  _max?: InputMaybe<TransactionMaxOrderByAggregateInput>;
  _min?: InputMaybe<TransactionMinOrderByAggregateInput>;
  _sum?: InputMaybe<TransactionSumOrderByAggregateInput>;
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  subscriptionId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TransactionOrderByWithRelationInput = {
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  subscription?: InputMaybe<SubscriptionOrderByWithRelationInput>;
  subscriptionId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum TransactionScalarFieldEnum {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  Id = 'id',
  Message = 'message',
  Status = 'status',
  SubscriptionId = 'subscriptionId',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type TransactionScalarWhereInput = {
  AND?: InputMaybe<Array<TransactionScalarWhereInput>>;
  NOT?: InputMaybe<Array<TransactionScalarWhereInput>>;
  OR?: InputMaybe<Array<TransactionScalarWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<StringFilter>;
  subscriptionId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type TransactionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TransactionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TransactionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TransactionScalarWhereWithAggregatesInput>>;
  amount?: InputMaybe<FloatWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  message?: InputMaybe<StringNullableWithAggregatesFilter>;
  status?: InputMaybe<StringWithAggregatesFilter>;
  subscriptionId?: InputMaybe<StringNullableWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  userId?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type TransactionSumAggregate = {
  __typename?: 'TransactionSumAggregate';
  amount?: Maybe<Scalars['Float']>;
};

export type TransactionSumOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
};

export type TransactionUpdateInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutTransactionsNestedInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutTransactionsNestedInput>;
};

export type TransactionUpdateManyMutationInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type TransactionUpdateManyWithWhereWithoutSubscriptionInput = {
  data: TransactionUpdateManyMutationInput;
  where: TransactionScalarWhereInput;
};

export type TransactionUpdateManyWithWhereWithoutUserInput = {
  data: TransactionUpdateManyMutationInput;
  where: TransactionScalarWhereInput;
};

export type TransactionUpdateManyWithoutSubscriptionNestedInput = {
  connect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionCreateOrConnectWithoutSubscriptionInput>>;
  create?: InputMaybe<Array<TransactionCreateWithoutSubscriptionInput>>;
  createMany?: InputMaybe<TransactionCreateManySubscriptionInputEnvelope>;
  delete?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransactionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  set?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  update?: InputMaybe<Array<TransactionUpdateWithWhereUniqueWithoutSubscriptionInput>>;
  updateMany?: InputMaybe<Array<TransactionUpdateManyWithWhereWithoutSubscriptionInput>>;
  upsert?: InputMaybe<Array<TransactionUpsertWithWhereUniqueWithoutSubscriptionInput>>;
};

export type TransactionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TransactionCreateWithoutUserInput>>;
  createMany?: InputMaybe<TransactionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransactionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  set?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  update?: InputMaybe<Array<TransactionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TransactionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TransactionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TransactionUpdateWithWhereUniqueWithoutSubscriptionInput = {
  data: TransactionUpdateWithoutSubscriptionInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
  data: TransactionUpdateWithoutUserInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpdateWithoutSubscriptionInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutTransactionsNestedInput>;
};

export type TransactionUpdateWithoutUserInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutTransactionsNestedInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type TransactionUpsertWithWhereUniqueWithoutSubscriptionInput = {
  create: TransactionCreateWithoutSubscriptionInput;
  update: TransactionUpdateWithoutSubscriptionInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
  create: TransactionCreateWithoutUserInput;
  update: TransactionUpdateWithoutUserInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionWhereInput = {
  AND?: InputMaybe<Array<TransactionWhereInput>>;
  NOT?: InputMaybe<Array<TransactionWhereInput>>;
  OR?: InputMaybe<Array<TransactionWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<StringFilter>;
  subscription?: InputMaybe<SubscriptionRelationFilter>;
  subscriptionId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type TransactionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  balance?: Maybe<Scalars['Float']>;
  bonus?: Maybe<Scalars['Float']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  job?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  preferredTheme?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  subscriptions: Array<Subscription>;
  transactions: Array<Transaction>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UserSubscriptionsArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type UserTransactionsArgs = {
  cursor?: InputMaybe<TransactionWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  balance?: Maybe<Scalars['Float']>;
  bonus?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  balance?: InputMaybe<SortOrder>;
  bonus?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  subscriptions: Scalars['Int'];
  transactions: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  balance: Scalars['Int'];
  bonus: Scalars['Int'];
  city: Scalars['Int'];
  country: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  emailConfirmed: Scalars['Int'];
  id: Scalars['Int'];
  job: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
  phoneNumber: Scalars['Int'];
  preferredTheme: Scalars['Int'];
  region: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  balance?: InputMaybe<SortOrder>;
  bonus?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailConfirmed?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  preferredTheme?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  balance?: InputMaybe<Scalars['Float']>;
  bonus?: InputMaybe<Scalars['Float']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmed?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  job?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  preferredTheme?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  subscriptions?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  balance?: InputMaybe<Scalars['Float']>;
  bonus?: InputMaybe<Scalars['Float']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmed?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  job?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  preferredTheme?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutSubscriptionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSubscriptionsInput>;
  create?: InputMaybe<UserCreateWithoutSubscriptionsInput>;
};

export type UserCreateNestedOneWithoutTransactionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTransactionsInput>;
  create?: InputMaybe<UserCreateWithoutTransactionsInput>;
};

export type UserCreateOrConnectWithoutSubscriptionsInput = {
  create: UserCreateWithoutSubscriptionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTransactionsInput = {
  create: UserCreateWithoutTransactionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutSubscriptionsInput = {
  balance?: InputMaybe<Scalars['Float']>;
  bonus?: InputMaybe<Scalars['Float']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmed?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  job?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  preferredTheme?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutTransactionsInput = {
  balance?: InputMaybe<Scalars['Float']>;
  bonus?: InputMaybe<Scalars['Float']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmed?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  job?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  preferredTheme?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  subscriptions?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  balance?: Maybe<Scalars['Float']>;
  bonus?: Maybe<Scalars['Float']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  job?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  preferredTheme?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  balance?: Maybe<Scalars['Float']>;
  bonus?: Maybe<Scalars['Float']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  job?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  preferredTheme?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  balance?: InputMaybe<SortOrder>;
  bonus?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailConfirmed?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  preferredTheme?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  balance?: Maybe<Scalars['Float']>;
  bonus?: Maybe<Scalars['Float']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  job?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  preferredTheme?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  balance?: InputMaybe<SortOrder>;
  bonus?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailConfirmed?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  preferredTheme?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  balance?: InputMaybe<SortOrder>;
  bonus?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailConfirmed?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  preferredTheme?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  balance?: InputMaybe<SortOrder>;
  bonus?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailConfirmed?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  preferredTheme?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  subscriptions?: InputMaybe<SubscriptionOrderByRelationAggregateInput>;
  transactions?: InputMaybe<TransactionOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Balance = 'balance',
  Bonus = 'bonus',
  City = 'city',
  Country = 'country',
  CreatedAt = 'createdAt',
  Email = 'email',
  EmailConfirmed = 'emailConfirmed',
  Id = 'id',
  Job = 'job',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phoneNumber',
  PreferredTheme = 'preferredTheme',
  Region = 'region',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  balance?: InputMaybe<FloatNullableWithAggregatesFilter>;
  bonus?: InputMaybe<FloatNullableWithAggregatesFilter>;
  city?: InputMaybe<StringNullableWithAggregatesFilter>;
  country?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  emailConfirmed?: InputMaybe<BoolNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  job?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  phoneNumber?: InputMaybe<StringNullableWithAggregatesFilter>;
  preferredTheme?: InputMaybe<StringNullableWithAggregatesFilter>;
  region?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  balance?: Maybe<Scalars['Float']>;
  bonus?: Maybe<Scalars['Float']>;
};

export type UserSumOrderByAggregateInput = {
  balance?: InputMaybe<SortOrder>;
  bonus?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  balance?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  bonus?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailConfirmed?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  job?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  preferredTheme?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  region?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  subscriptions?: InputMaybe<SubscriptionUpdateManyWithoutUserNestedInput>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  balance?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  bonus?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailConfirmed?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  job?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  preferredTheme?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  region?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSubscriptionsInput>;
  create?: InputMaybe<UserCreateWithoutSubscriptionsInput>;
  update?: InputMaybe<UserUpdateWithoutSubscriptionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSubscriptionsInput>;
};

export type UserUpdateOneWithoutTransactionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTransactionsInput>;
  create?: InputMaybe<UserCreateWithoutTransactionsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutTransactionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutTransactionsInput>;
};

export type UserUpdateWithoutSubscriptionsInput = {
  balance?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  bonus?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailConfirmed?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  job?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  preferredTheme?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  region?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTransactionsInput = {
  balance?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  bonus?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailConfirmed?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  job?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  preferredTheme?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  region?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  subscriptions?: InputMaybe<SubscriptionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutSubscriptionsInput = {
  create: UserCreateWithoutSubscriptionsInput;
  update: UserUpdateWithoutSubscriptionsInput;
};

export type UserUpsertWithoutTransactionsInput = {
  create: UserCreateWithoutTransactionsInput;
  update: UserUpdateWithoutTransactionsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  balance?: InputMaybe<FloatNullableFilter>;
  bonus?: InputMaybe<FloatNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  emailConfirmed?: InputMaybe<BoolNullableFilter>;
  id?: InputMaybe<StringFilter>;
  job?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  preferredTheme?: InputMaybe<StringNullableFilter>;
  region?: InputMaybe<StringNullableFilter>;
  subscriptions?: InputMaybe<SubscriptionListRelationFilter>;
  transactions?: InputMaybe<TransactionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type CreateOneSubscriptionMutationVariables = Exact<{
  data: SubscriptionCreateInput;
}>;


export type CreateOneSubscriptionMutation = { __typename?: 'Mutation', createOneSubscription: { __typename?: 'Subscription', id: string, productId: string, userId: string, totalPaid: number, expiryDate?: any | null, renewCounter: number, createdAt?: any | null, updatedAt?: any | null, product: { __typename?: 'Product', id: string, name: string, description?: string | null }, user: { __typename?: 'User', id: string, name: string, email: string } } };

export type CreateOneTransactionMutationVariables = Exact<{
  data: TransactionCreateInput;
}>;


export type CreateOneTransactionMutation = { __typename?: 'Mutation', createOneTransaction: { __typename?: 'Transaction', id: string, type: string, status: string, amount: number, userId?: string | null, createdAt?: any | null, updatedAt?: any | null } };

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken?: string | null, refreshToken?: string | null, user?: { __typename?: 'User', id: string, email: string, name: string, emailConfirmed?: boolean | null, phoneNumber?: string | null, country?: string | null, region?: string | null, city?: string | null, job?: string | null, preferredTheme?: string | null, balance?: number | null, bonus?: number | null, createdAt?: any | null, updatedAt?: any | null } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RefreshMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshMutation = { __typename?: 'Mutation', refresh: { __typename?: 'RefreshTokensResponse', accessToken?: string | null, refreshToken?: string | null } };

export type RegisterMutationVariables = Exact<{
  name: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthResponse', accessToken?: string | null, refreshToken?: string | null, user?: { __typename?: 'User', id: string, email: string, emailConfirmed?: boolean | null, name: string, createdAt?: any | null, updatedAt?: any | null } | null } };

export type SendEmailConfirmationMutationVariables = Exact<{ [key: string]: never; }>;


export type SendEmailConfirmationMutation = { __typename?: 'Mutation', sendEmailConfirmation: boolean };

export type UpdateOneUserMutationVariables = Exact<{
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}>;


export type UpdateOneUserMutation = { __typename?: 'Mutation', updateOneUser?: { __typename?: 'User', id: string, email: string, name: string, emailConfirmed?: boolean | null, phoneNumber?: string | null, country?: string | null, region?: string | null, city?: string | null, job?: string | null, preferredTheme?: string | null, balance?: number | null, bonus?: number | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };

export type ProductQueryVariables = Exact<{
  where: ProductWhereUniqueInput;
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, monthPrice: number, trialDuration: number, cancelDuration: number, description?: string | null, infoURL?: string | null, createdAt?: any | null, updatedAt?: any | null, _count?: { __typename?: 'ProductCount', subscriptions: number } | null } | null };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, name: string, monthPrice: number, trialDuration: number, cancelDuration: number, description?: string | null, infoURL?: string | null, createdAt?: any | null, updatedAt?: any | null, _count?: { __typename?: 'ProductCount', subscriptions: number } | null }> };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'User', id: string, email: string, name: string, emailConfirmed?: boolean | null, phoneNumber?: string | null, country?: string | null, region?: string | null, city?: string | null, job?: string | null, preferredTheme?: string | null, balance?: number | null, bonus?: number | null, createdAt?: any | null, updatedAt?: any | null } | null };


export const CreateOneSubscriptionDocument = gql`
    mutation CreateOneSubscription($data: SubscriptionCreateInput!) {
  createOneSubscription(data: $data) {
    id
    productId
    userId
    totalPaid
    expiryDate
    renewCounter
    createdAt
    updatedAt
    product {
      id
      name
      description
    }
    user {
      id
      name
      email
    }
  }
}
    `;
export type CreateOneSubscriptionMutationFn = Apollo.MutationFunction<CreateOneSubscriptionMutation, CreateOneSubscriptionMutationVariables>;

/**
 * __useCreateOneSubscriptionMutation__
 *
 * To run a mutation, you first call `useCreateOneSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneSubscriptionMutation, { data, loading, error }] = useCreateOneSubscriptionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneSubscriptionMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneSubscriptionMutation, CreateOneSubscriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneSubscriptionMutation, CreateOneSubscriptionMutationVariables>(CreateOneSubscriptionDocument, options);
      }
export type CreateOneSubscriptionMutationHookResult = ReturnType<typeof useCreateOneSubscriptionMutation>;
export type CreateOneSubscriptionMutationResult = Apollo.MutationResult<CreateOneSubscriptionMutation>;
export type CreateOneSubscriptionMutationOptions = Apollo.BaseMutationOptions<CreateOneSubscriptionMutation, CreateOneSubscriptionMutationVariables>;
export const CreateOneTransactionDocument = gql`
    mutation CreateOneTransaction($data: TransactionCreateInput!) {
  createOneTransaction(data: $data) {
    id
    type
    status
    amount
    userId
    createdAt
    updatedAt
  }
}
    `;
export type CreateOneTransactionMutationFn = Apollo.MutationFunction<CreateOneTransactionMutation, CreateOneTransactionMutationVariables>;

/**
 * __useCreateOneTransactionMutation__
 *
 * To run a mutation, you first call `useCreateOneTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneTransactionMutation, { data, loading, error }] = useCreateOneTransactionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneTransactionMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneTransactionMutation, CreateOneTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneTransactionMutation, CreateOneTransactionMutationVariables>(CreateOneTransactionDocument, options);
      }
export type CreateOneTransactionMutationHookResult = ReturnType<typeof useCreateOneTransactionMutation>;
export type CreateOneTransactionMutationResult = Apollo.MutationResult<CreateOneTransactionMutation>;
export type CreateOneTransactionMutationOptions = Apollo.BaseMutationOptions<CreateOneTransactionMutation, CreateOneTransactionMutationVariables>;
export const LoginDocument = gql`
    mutation Login($password: String!, $email: String!) {
  login(password: $password, email: $email) {
    accessToken
    refreshToken
    user {
      id
      email
      name
      emailConfirmed
      phoneNumber
      country
      region
      city
      job
      preferredTheme
      balance
      bonus
      createdAt
      updatedAt
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RefreshDocument = gql`
    mutation Refresh {
  refresh {
    accessToken
    refreshToken
  }
}
    `;
export type RefreshMutationFn = Apollo.MutationFunction<RefreshMutation, RefreshMutationVariables>;

/**
 * __useRefreshMutation__
 *
 * To run a mutation, you first call `useRefreshMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshMutation, { data, loading, error }] = useRefreshMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshMutation(baseOptions?: Apollo.MutationHookOptions<RefreshMutation, RefreshMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshMutation, RefreshMutationVariables>(RefreshDocument, options);
      }
export type RefreshMutationHookResult = ReturnType<typeof useRefreshMutation>;
export type RefreshMutationResult = Apollo.MutationResult<RefreshMutation>;
export type RefreshMutationOptions = Apollo.BaseMutationOptions<RefreshMutation, RefreshMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($name: String!, $password: String!, $email: String!) {
  register(name: $name, password: $password, email: $email) {
    accessToken
    refreshToken
    user {
      id
      email
      emailConfirmed
      name
      createdAt
      updatedAt
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SendEmailConfirmationDocument = gql`
    mutation sendEmailConfirmation {
  sendEmailConfirmation
}
    `;
export type SendEmailConfirmationMutationFn = Apollo.MutationFunction<SendEmailConfirmationMutation, SendEmailConfirmationMutationVariables>;

/**
 * __useSendEmailConfirmationMutation__
 *
 * To run a mutation, you first call `useSendEmailConfirmationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendEmailConfirmationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendEmailConfirmationMutation, { data, loading, error }] = useSendEmailConfirmationMutation({
 *   variables: {
 *   },
 * });
 */
export function useSendEmailConfirmationMutation(baseOptions?: Apollo.MutationHookOptions<SendEmailConfirmationMutation, SendEmailConfirmationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendEmailConfirmationMutation, SendEmailConfirmationMutationVariables>(SendEmailConfirmationDocument, options);
      }
export type SendEmailConfirmationMutationHookResult = ReturnType<typeof useSendEmailConfirmationMutation>;
export type SendEmailConfirmationMutationResult = Apollo.MutationResult<SendEmailConfirmationMutation>;
export type SendEmailConfirmationMutationOptions = Apollo.BaseMutationOptions<SendEmailConfirmationMutation, SendEmailConfirmationMutationVariables>;
export const UpdateOneUserDocument = gql`
    mutation UpdateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateOneUser(data: $data, where: $where) {
    id
    email
    name
    emailConfirmed
    phoneNumber
    country
    region
    city
    job
    preferredTheme
    balance
    bonus
    createdAt
    updatedAt
  }
}
    `;
export type UpdateOneUserMutationFn = Apollo.MutationFunction<UpdateOneUserMutation, UpdateOneUserMutationVariables>;

/**
 * __useUpdateOneUserMutation__
 *
 * To run a mutation, you first call `useUpdateOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneUserMutation, { data, loading, error }] = useUpdateOneUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateOneUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneUserMutation, UpdateOneUserMutationVariables>(UpdateOneUserDocument, options);
      }
export type UpdateOneUserMutationHookResult = ReturnType<typeof useUpdateOneUserMutation>;
export type UpdateOneUserMutationResult = Apollo.MutationResult<UpdateOneUserMutation>;
export type UpdateOneUserMutationOptions = Apollo.BaseMutationOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>;
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;
export const ProductDocument = gql`
    query Product($where: ProductWhereUniqueInput!) {
  product(where: $where) {
    id
    name
    monthPrice
    trialDuration
    cancelDuration
    description
    infoURL
    createdAt
    updatedAt
    _count {
      subscriptions
    }
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const ProductsDocument = gql`
    query Products {
  products {
    id
    name
    monthPrice
    trialDuration
    cancelDuration
    description
    infoURL
    createdAt
    updatedAt
    _count {
      subscriptions
    }
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ProfileDocument = gql`
    query Profile {
  profile {
    id
    email
    name
    emailConfirmed
    phoneNumber
    country
    region
    city
    job
    preferredTheme
    balance
    bonus
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;