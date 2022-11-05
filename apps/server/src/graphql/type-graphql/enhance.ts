import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Product: crudResolvers.ProductCrudResolver,
  Plan: crudResolvers.PlanCrudResolver,
  Subscription: crudResolvers.SubscriptionCrudResolver,
  Transaction: crudResolvers.TransactionCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Product: {
    aggregateProduct: actionResolvers.AggregateProductResolver,
    createManyProduct: actionResolvers.CreateManyProductResolver,
    createOneProduct: actionResolvers.CreateOneProductResolver,
    deleteManyProduct: actionResolvers.DeleteManyProductResolver,
    deleteOneProduct: actionResolvers.DeleteOneProductResolver,
    findFirstProduct: actionResolvers.FindFirstProductResolver,
    products: actionResolvers.FindManyProductResolver,
    product: actionResolvers.FindUniqueProductResolver,
    groupByProduct: actionResolvers.GroupByProductResolver,
    updateManyProduct: actionResolvers.UpdateManyProductResolver,
    updateOneProduct: actionResolvers.UpdateOneProductResolver,
    upsertOneProduct: actionResolvers.UpsertOneProductResolver
  },
  Plan: {
    aggregatePlan: actionResolvers.AggregatePlanResolver,
    createManyPlan: actionResolvers.CreateManyPlanResolver,
    createOnePlan: actionResolvers.CreateOnePlanResolver,
    deleteManyPlan: actionResolvers.DeleteManyPlanResolver,
    deleteOnePlan: actionResolvers.DeleteOnePlanResolver,
    findFirstPlan: actionResolvers.FindFirstPlanResolver,
    plans: actionResolvers.FindManyPlanResolver,
    plan: actionResolvers.FindUniquePlanResolver,
    groupByPlan: actionResolvers.GroupByPlanResolver,
    updateManyPlan: actionResolvers.UpdateManyPlanResolver,
    updateOnePlan: actionResolvers.UpdateOnePlanResolver,
    upsertOnePlan: actionResolvers.UpsertOnePlanResolver
  },
  Subscription: {
    aggregateSubscription: actionResolvers.AggregateSubscriptionResolver,
    createManySubscription: actionResolvers.CreateManySubscriptionResolver,
    createOneSubscription: actionResolvers.CreateOneSubscriptionResolver,
    deleteManySubscription: actionResolvers.DeleteManySubscriptionResolver,
    deleteOneSubscription: actionResolvers.DeleteOneSubscriptionResolver,
    findFirstSubscription: actionResolvers.FindFirstSubscriptionResolver,
    subscriptions: actionResolvers.FindManySubscriptionResolver,
    subscription: actionResolvers.FindUniqueSubscriptionResolver,
    groupBySubscription: actionResolvers.GroupBySubscriptionResolver,
    updateManySubscription: actionResolvers.UpdateManySubscriptionResolver,
    updateOneSubscription: actionResolvers.UpdateOneSubscriptionResolver,
    upsertOneSubscription: actionResolvers.UpsertOneSubscriptionResolver
  },
  Transaction: {
    aggregateTransaction: actionResolvers.AggregateTransactionResolver,
    createManyTransaction: actionResolvers.CreateManyTransactionResolver,
    createOneTransaction: actionResolvers.CreateOneTransactionResolver,
    deleteManyTransaction: actionResolvers.DeleteManyTransactionResolver,
    deleteOneTransaction: actionResolvers.DeleteOneTransactionResolver,
    findFirstTransaction: actionResolvers.FindFirstTransactionResolver,
    transactions: actionResolvers.FindManyTransactionResolver,
    transaction: actionResolvers.FindUniqueTransactionResolver,
    groupByTransaction: actionResolvers.GroupByTransactionResolver,
    updateManyTransaction: actionResolvers.UpdateManyTransactionResolver,
    updateOneTransaction: actionResolvers.UpdateOneTransactionResolver,
    upsertOneTransaction: actionResolvers.UpsertOneTransactionResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "users", "user", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Product: ["aggregateProduct", "createManyProduct", "createOneProduct", "deleteManyProduct", "deleteOneProduct", "findFirstProduct", "products", "product", "groupByProduct", "updateManyProduct", "updateOneProduct", "upsertOneProduct"],
  Plan: ["aggregatePlan", "createManyPlan", "createOnePlan", "deleteManyPlan", "deleteOnePlan", "findFirstPlan", "plans", "plan", "groupByPlan", "updateManyPlan", "updateOnePlan", "upsertOnePlan"],
  Subscription: ["aggregateSubscription", "createManySubscription", "createOneSubscription", "deleteManySubscription", "deleteOneSubscription", "findFirstSubscription", "subscriptions", "subscription", "groupBySubscription", "updateManySubscription", "updateOneSubscription", "upsertOneSubscription"],
  Transaction: ["aggregateTransaction", "createManyTransaction", "createOneTransaction", "deleteManyTransaction", "deleteOneTransaction", "findFirstTransaction", "transactions", "transaction", "groupByTransaction", "updateManyTransaction", "updateOneTransaction", "upsertOneTransaction"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateProductArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProductArgs: ["data"],
  CreateOneProductArgs: ["data"],
  DeleteManyProductArgs: ["where"],
  DeleteOneProductArgs: ["where"],
  FindFirstProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProductArgs: ["where"],
  GroupByProductArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProductArgs: ["data", "where"],
  UpdateOneProductArgs: ["data", "where"],
  UpsertOneProductArgs: ["where", "create", "update"],
  AggregatePlanArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPlanArgs: ["data"],
  CreateOnePlanArgs: ["data"],
  DeleteManyPlanArgs: ["where"],
  DeleteOnePlanArgs: ["where"],
  FindFirstPlanArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPlanArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePlanArgs: ["where"],
  GroupByPlanArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPlanArgs: ["data", "where"],
  UpdateOnePlanArgs: ["data", "where"],
  UpsertOnePlanArgs: ["where", "create", "update"],
  AggregateSubscriptionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySubscriptionArgs: ["data"],
  CreateOneSubscriptionArgs: ["data"],
  DeleteManySubscriptionArgs: ["where"],
  DeleteOneSubscriptionArgs: ["where"],
  FindFirstSubscriptionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySubscriptionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSubscriptionArgs: ["where"],
  GroupBySubscriptionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySubscriptionArgs: ["data", "where"],
  UpdateOneSubscriptionArgs: ["data", "where"],
  UpsertOneSubscriptionArgs: ["where", "create", "update"],
  AggregateTransactionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTransactionArgs: ["data"],
  CreateOneTransactionArgs: ["data"],
  DeleteManyTransactionArgs: ["where"],
  DeleteOneTransactionArgs: ["where"],
  FindFirstTransactionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTransactionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTransactionArgs: ["where"],
  GroupByTransactionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTransactionArgs: ["data", "where"],
  UpdateOneTransactionArgs: ["data", "where"],
  UpsertOneTransactionArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Product: relationResolvers.ProductRelationsResolver,
  Plan: relationResolvers.PlanRelationsResolver,
  Subscription: relationResolvers.SubscriptionRelationsResolver,
  Transaction: relationResolvers.TransactionRelationsResolver
};
const relationResolversInfo = {
  User: ["subscriptions", "transactions"],
  Product: ["plans", "subscriptions"],
  Plan: ["product"],
  Subscription: ["product", "user", "transactions"],
  Transaction: ["user", "subscription"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "email", "name", "emailConfirmed", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "createdAt", "updatedAt"],
  Product: ["id", "name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "createdAt", "updatedAt"],
  Plan: ["id", "name", "pricePerMonth", "details", "productId", "createdAt", "updatedAt"],
  Subscription: ["id", "productId", "userId", "totalPaid", "renewCounter", "expiryDate", "createdAt", "updatedAt"],
  Transaction: ["id", "type", "status", "message", "amount", "userId", "subscriptionId", "createdAt", "updatedAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProduct: ["_count", "_avg", "_sum", "_min", "_max"],
  ProductGroupBy: ["id", "name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePlan: ["_count", "_avg", "_sum", "_min", "_max"],
  PlanGroupBy: ["id", "name", "pricePerMonth", "details", "productId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSubscription: ["_count", "_avg", "_sum", "_min", "_max"],
  SubscriptionGroupBy: ["id", "productId", "userId", "totalPaid", "renewCounter", "expiryDate", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTransaction: ["_count", "_avg", "_sum", "_min", "_max"],
  TransactionGroupBy: ["id", "type", "status", "message", "amount", "userId", "subscriptionId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["subscriptions", "transactions"],
  UserCountAggregate: ["id", "email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "createdAt", "updatedAt", "_all"],
  UserAvgAggregate: ["balance", "bonus"],
  UserSumAggregate: ["balance", "bonus"],
  UserMinAggregate: ["id", "email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "createdAt", "updatedAt"],
  ProductCount: ["plans", "subscriptions"],
  ProductCountAggregate: ["id", "name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "createdAt", "updatedAt", "_all"],
  ProductAvgAggregate: ["monthPrice", "trialDuration", "cancelDuration"],
  ProductSumAggregate: ["monthPrice", "trialDuration", "cancelDuration"],
  ProductMinAggregate: ["id", "name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "createdAt", "updatedAt"],
  ProductMaxAggregate: ["id", "name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "createdAt", "updatedAt"],
  PlanCountAggregate: ["id", "name", "pricePerMonth", "details", "productId", "createdAt", "updatedAt", "_all"],
  PlanAvgAggregate: ["pricePerMonth"],
  PlanSumAggregate: ["pricePerMonth"],
  PlanMinAggregate: ["id", "name", "pricePerMonth", "details", "productId", "createdAt", "updatedAt"],
  PlanMaxAggregate: ["id", "name", "pricePerMonth", "details", "productId", "createdAt", "updatedAt"],
  SubscriptionCount: ["transactions"],
  SubscriptionCountAggregate: ["id", "productId", "userId", "totalPaid", "renewCounter", "expiryDate", "createdAt", "updatedAt", "_all"],
  SubscriptionAvgAggregate: ["totalPaid", "renewCounter"],
  SubscriptionSumAggregate: ["totalPaid", "renewCounter"],
  SubscriptionMinAggregate: ["id", "productId", "userId", "totalPaid", "renewCounter", "expiryDate", "createdAt", "updatedAt"],
  SubscriptionMaxAggregate: ["id", "productId", "userId", "totalPaid", "renewCounter", "expiryDate", "createdAt", "updatedAt"],
  TransactionCountAggregate: ["id", "type", "status", "message", "amount", "userId", "subscriptionId", "createdAt", "updatedAt", "_all"],
  TransactionAvgAggregate: ["amount"],
  TransactionSumAggregate: ["amount"],
  TransactionMinAggregate: ["id", "type", "status", "message", "amount", "userId", "subscriptionId", "createdAt", "updatedAt"],
  TransactionMaxAggregate: ["id", "type", "status", "message", "amount", "userId", "subscriptionId", "createdAt", "updatedAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "subscriptions", "transactions", "createdAt", "updatedAt"],
  UserOrderByWithRelationInput: ["id", "email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "subscriptions", "transactions", "createdAt", "updatedAt"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "createdAt", "updatedAt"],
  ProductWhereInput: ["AND", "OR", "NOT", "id", "name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "plans", "subscriptions", "createdAt", "updatedAt"],
  ProductOrderByWithRelationInput: ["id", "name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "plans", "subscriptions", "createdAt", "updatedAt"],
  ProductWhereUniqueInput: ["id", "name"],
  ProductOrderByWithAggregationInput: ["id", "name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "createdAt", "updatedAt"],
  PlanWhereInput: ["AND", "OR", "NOT", "id", "name", "pricePerMonth", "details", "product", "productId", "createdAt", "updatedAt"],
  PlanOrderByWithRelationInput: ["id", "name", "pricePerMonth", "details", "product", "productId", "createdAt", "updatedAt"],
  PlanWhereUniqueInput: ["id"],
  PlanOrderByWithAggregationInput: ["id", "name", "pricePerMonth", "details", "productId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  PlanScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "pricePerMonth", "details", "productId", "createdAt", "updatedAt"],
  SubscriptionWhereInput: ["AND", "OR", "NOT", "id", "product", "productId", "user", "userId", "totalPaid", "renewCounter", "transactions", "expiryDate", "createdAt", "updatedAt"],
  SubscriptionOrderByWithRelationInput: ["id", "product", "productId", "user", "userId", "totalPaid", "renewCounter", "transactions", "expiryDate", "createdAt", "updatedAt"],
  SubscriptionWhereUniqueInput: ["id"],
  SubscriptionOrderByWithAggregationInput: ["id", "productId", "userId", "totalPaid", "renewCounter", "expiryDate", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  SubscriptionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "productId", "userId", "totalPaid", "renewCounter", "expiryDate", "createdAt", "updatedAt"],
  TransactionWhereInput: ["AND", "OR", "NOT", "id", "type", "status", "message", "amount", "user", "userId", "subscription", "subscriptionId", "createdAt", "updatedAt"],
  TransactionOrderByWithRelationInput: ["id", "type", "status", "message", "amount", "user", "userId", "subscription", "subscriptionId", "createdAt", "updatedAt"],
  TransactionWhereUniqueInput: ["id"],
  TransactionOrderByWithAggregationInput: ["id", "type", "status", "message", "amount", "userId", "subscriptionId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  TransactionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "type", "status", "message", "amount", "userId", "subscriptionId", "createdAt", "updatedAt"],
  UserCreateInput: ["id", "email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "subscriptions", "transactions", "createdAt", "updatedAt"],
  UserUpdateInput: ["email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "subscriptions", "transactions", "createdAt", "updatedAt"],
  UserCreateManyInput: ["id", "email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "createdAt", "updatedAt"],
  ProductCreateInput: ["id", "name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "plans", "subscriptions", "createdAt", "updatedAt"],
  ProductUpdateInput: ["name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "plans", "subscriptions", "createdAt", "updatedAt"],
  ProductCreateManyInput: ["id", "name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "createdAt", "updatedAt"],
  ProductUpdateManyMutationInput: ["name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "createdAt", "updatedAt"],
  PlanCreateInput: ["id", "name", "pricePerMonth", "details", "product", "createdAt", "updatedAt"],
  PlanUpdateInput: ["name", "pricePerMonth", "details", "product", "createdAt", "updatedAt"],
  PlanCreateManyInput: ["id", "name", "pricePerMonth", "details", "productId", "createdAt", "updatedAt"],
  PlanUpdateManyMutationInput: ["name", "pricePerMonth", "details", "createdAt", "updatedAt"],
  SubscriptionCreateInput: ["id", "product", "user", "totalPaid", "renewCounter", "transactions", "expiryDate", "createdAt", "updatedAt"],
  SubscriptionUpdateInput: ["product", "user", "totalPaid", "renewCounter", "transactions", "expiryDate", "createdAt", "updatedAt"],
  SubscriptionCreateManyInput: ["id", "productId", "userId", "totalPaid", "renewCounter", "expiryDate", "createdAt", "updatedAt"],
  SubscriptionUpdateManyMutationInput: ["totalPaid", "renewCounter", "expiryDate", "createdAt", "updatedAt"],
  TransactionCreateInput: ["id", "type", "status", "message", "amount", "user", "subscription", "createdAt", "updatedAt"],
  TransactionUpdateInput: ["type", "status", "message", "amount", "user", "subscription", "createdAt", "updatedAt"],
  TransactionCreateManyInput: ["id", "type", "status", "message", "amount", "userId", "subscriptionId", "createdAt", "updatedAt"],
  TransactionUpdateManyMutationInput: ["type", "status", "message", "amount", "createdAt", "updatedAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolNullableFilter: ["equals", "not", "isSet"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "isSet"],
  FloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  SubscriptionListRelationFilter: ["every", "some", "none"],
  TransactionListRelationFilter: ["every", "some", "none"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  SubscriptionOrderByRelationAggregateInput: ["_count"],
  TransactionOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "createdAt", "updatedAt"],
  UserAvgOrderByAggregateInput: ["balance", "bonus"],
  UserMaxOrderByAggregateInput: ["id", "email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "createdAt", "updatedAt"],
  UserMinOrderByAggregateInput: ["id", "email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "createdAt", "updatedAt"],
  UserSumOrderByAggregateInput: ["balance", "bonus"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max", "isSet"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max", "isSet"],
  FloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max", "isSet"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max", "isSet"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PlanListRelationFilter: ["every", "some", "none"],
  PlanOrderByRelationAggregateInput: ["_count"],
  ProductCountOrderByAggregateInput: ["id", "name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "createdAt", "updatedAt"],
  ProductAvgOrderByAggregateInput: ["monthPrice", "trialDuration", "cancelDuration"],
  ProductMaxOrderByAggregateInput: ["id", "name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "createdAt", "updatedAt"],
  ProductMinOrderByAggregateInput: ["id", "name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "createdAt", "updatedAt"],
  ProductSumOrderByAggregateInput: ["monthPrice", "trialDuration", "cancelDuration"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  ProductRelationFilter: ["is", "isNot"],
  PlanCountOrderByAggregateInput: ["id", "name", "pricePerMonth", "details", "productId", "createdAt", "updatedAt"],
  PlanAvgOrderByAggregateInput: ["pricePerMonth"],
  PlanMaxOrderByAggregateInput: ["id", "name", "pricePerMonth", "details", "productId", "createdAt", "updatedAt"],
  PlanMinOrderByAggregateInput: ["id", "name", "pricePerMonth", "details", "productId", "createdAt", "updatedAt"],
  PlanSumOrderByAggregateInput: ["pricePerMonth"],
  UserRelationFilter: ["is", "isNot"],
  SubscriptionCountOrderByAggregateInput: ["id", "productId", "userId", "totalPaid", "renewCounter", "expiryDate", "createdAt", "updatedAt"],
  SubscriptionAvgOrderByAggregateInput: ["totalPaid", "renewCounter"],
  SubscriptionMaxOrderByAggregateInput: ["id", "productId", "userId", "totalPaid", "renewCounter", "expiryDate", "createdAt", "updatedAt"],
  SubscriptionMinOrderByAggregateInput: ["id", "productId", "userId", "totalPaid", "renewCounter", "expiryDate", "createdAt", "updatedAt"],
  SubscriptionSumOrderByAggregateInput: ["totalPaid", "renewCounter"],
  SubscriptionRelationFilter: ["is", "isNot"],
  TransactionCountOrderByAggregateInput: ["id", "type", "status", "message", "amount", "userId", "subscriptionId", "createdAt", "updatedAt"],
  TransactionAvgOrderByAggregateInput: ["amount"],
  TransactionMaxOrderByAggregateInput: ["id", "type", "status", "message", "amount", "userId", "subscriptionId", "createdAt", "updatedAt"],
  TransactionMinOrderByAggregateInput: ["id", "type", "status", "message", "amount", "userId", "subscriptionId", "createdAt", "updatedAt"],
  TransactionSumOrderByAggregateInput: ["amount"],
  SubscriptionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  TransactionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableBoolFieldUpdateOperationsInput: ["set", "unset"],
  NullableStringFieldUpdateOperationsInput: ["set", "unset"],
  NullableFloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide", "unset"],
  SubscriptionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TransactionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NullableDateTimeFieldUpdateOperationsInput: ["set", "unset"],
  PlanCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "createMany", "connect"],
  SubscriptionCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "createMany", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  PlanUpdateManyWithoutProductNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SubscriptionUpdateManyWithoutProductNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProductCreateNestedOneWithoutPlansInput: ["create", "connectOrCreate", "connect"],
  ProductUpdateOneRequiredWithoutPlansNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProductCreateNestedOneWithoutSubscriptionsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutSubscriptionsInput: ["create", "connectOrCreate", "connect"],
  TransactionCreateNestedManyWithoutSubscriptionInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProductUpdateOneRequiredWithoutSubscriptionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutSubscriptionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TransactionUpdateManyWithoutSubscriptionNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutTransactionsInput: ["create", "connectOrCreate", "connect"],
  SubscriptionCreateNestedOneWithoutTransactionsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutTransactionsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  SubscriptionUpdateOneWithoutTransactionsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolNullableFilter: ["equals", "not", "isSet"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "isSet"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max", "isSet"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max", "isSet"],
  NestedFloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max", "isSet"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max", "isSet"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  SubscriptionCreateWithoutUserInput: ["id", "product", "totalPaid", "renewCounter", "transactions", "expiryDate", "createdAt", "updatedAt"],
  SubscriptionCreateOrConnectWithoutUserInput: ["where", "create"],
  SubscriptionCreateManyUserInputEnvelope: ["data"],
  TransactionCreateWithoutUserInput: ["id", "type", "status", "message", "amount", "subscription", "createdAt", "updatedAt"],
  TransactionCreateOrConnectWithoutUserInput: ["where", "create"],
  TransactionCreateManyUserInputEnvelope: ["data"],
  SubscriptionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  SubscriptionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  SubscriptionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  SubscriptionScalarWhereInput: ["AND", "OR", "NOT", "id", "productId", "userId", "totalPaid", "renewCounter", "expiryDate", "createdAt", "updatedAt"],
  TransactionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  TransactionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  TransactionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  TransactionScalarWhereInput: ["AND", "OR", "NOT", "id", "type", "status", "message", "amount", "userId", "subscriptionId", "createdAt", "updatedAt"],
  PlanCreateWithoutProductInput: ["id", "name", "pricePerMonth", "details", "createdAt", "updatedAt"],
  PlanCreateOrConnectWithoutProductInput: ["where", "create"],
  PlanCreateManyProductInputEnvelope: ["data"],
  SubscriptionCreateWithoutProductInput: ["id", "user", "totalPaid", "renewCounter", "transactions", "expiryDate", "createdAt", "updatedAt"],
  SubscriptionCreateOrConnectWithoutProductInput: ["where", "create"],
  SubscriptionCreateManyProductInputEnvelope: ["data"],
  PlanUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
  PlanUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
  PlanUpdateManyWithWhereWithoutProductInput: ["where", "data"],
  PlanScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "pricePerMonth", "details", "productId", "createdAt", "updatedAt"],
  SubscriptionUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
  SubscriptionUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
  SubscriptionUpdateManyWithWhereWithoutProductInput: ["where", "data"],
  ProductCreateWithoutPlansInput: ["id", "name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "subscriptions", "createdAt", "updatedAt"],
  ProductCreateOrConnectWithoutPlansInput: ["where", "create"],
  ProductUpsertWithoutPlansInput: ["update", "create"],
  ProductUpdateWithoutPlansInput: ["name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "subscriptions", "createdAt", "updatedAt"],
  ProductCreateWithoutSubscriptionsInput: ["id", "name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "plans", "createdAt", "updatedAt"],
  ProductCreateOrConnectWithoutSubscriptionsInput: ["where", "create"],
  UserCreateWithoutSubscriptionsInput: ["id", "email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "transactions", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutSubscriptionsInput: ["where", "create"],
  TransactionCreateWithoutSubscriptionInput: ["id", "type", "status", "message", "amount", "user", "createdAt", "updatedAt"],
  TransactionCreateOrConnectWithoutSubscriptionInput: ["where", "create"],
  TransactionCreateManySubscriptionInputEnvelope: ["data"],
  ProductUpsertWithoutSubscriptionsInput: ["update", "create"],
  ProductUpdateWithoutSubscriptionsInput: ["name", "monthPrice", "trialDuration", "cancelDuration", "description", "infoURL", "plans", "createdAt", "updatedAt"],
  UserUpsertWithoutSubscriptionsInput: ["update", "create"],
  UserUpdateWithoutSubscriptionsInput: ["email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "transactions", "createdAt", "updatedAt"],
  TransactionUpsertWithWhereUniqueWithoutSubscriptionInput: ["where", "update", "create"],
  TransactionUpdateWithWhereUniqueWithoutSubscriptionInput: ["where", "data"],
  TransactionUpdateManyWithWhereWithoutSubscriptionInput: ["where", "data"],
  UserCreateWithoutTransactionsInput: ["id", "email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "subscriptions", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutTransactionsInput: ["where", "create"],
  SubscriptionCreateWithoutTransactionsInput: ["id", "product", "user", "totalPaid", "renewCounter", "expiryDate", "createdAt", "updatedAt"],
  SubscriptionCreateOrConnectWithoutTransactionsInput: ["where", "create"],
  UserUpsertWithoutTransactionsInput: ["update", "create"],
  UserUpdateWithoutTransactionsInput: ["email", "name", "emailConfirmed", "password", "phoneNumber", "country", "region", "city", "job", "preferredTheme", "balance", "bonus", "subscriptions", "createdAt", "updatedAt"],
  SubscriptionUpsertWithoutTransactionsInput: ["update", "create"],
  SubscriptionUpdateWithoutTransactionsInput: ["product", "user", "totalPaid", "renewCounter", "expiryDate", "createdAt", "updatedAt"],
  SubscriptionCreateManyUserInput: ["id", "productId", "totalPaid", "renewCounter", "expiryDate", "createdAt", "updatedAt"],
  TransactionCreateManyUserInput: ["id", "type", "status", "message", "amount", "subscriptionId", "createdAt", "updatedAt"],
  SubscriptionUpdateWithoutUserInput: ["product", "totalPaid", "renewCounter", "transactions", "expiryDate", "createdAt", "updatedAt"],
  TransactionUpdateWithoutUserInput: ["type", "status", "message", "amount", "subscription", "createdAt", "updatedAt"],
  PlanCreateManyProductInput: ["id", "name", "pricePerMonth", "details", "createdAt", "updatedAt"],
  SubscriptionCreateManyProductInput: ["id", "userId", "totalPaid", "renewCounter", "expiryDate", "createdAt", "updatedAt"],
  PlanUpdateWithoutProductInput: ["name", "pricePerMonth", "details", "createdAt", "updatedAt"],
  SubscriptionUpdateWithoutProductInput: ["user", "totalPaid", "renewCounter", "transactions", "expiryDate", "createdAt", "updatedAt"],
  TransactionCreateManySubscriptionInput: ["id", "type", "status", "message", "amount", "userId", "createdAt", "updatedAt"],
  TransactionUpdateWithoutSubscriptionInput: ["type", "status", "message", "amount", "user", "createdAt", "updatedAt"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

