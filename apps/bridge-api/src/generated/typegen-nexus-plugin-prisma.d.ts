/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  type NexusGen = NexusGenTypes
}

export interface NexusGenInputs {
  BoolNullableFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: NexusGenInputs['NestedBoolNullableFilter'] | null; // NestedBoolNullableFilter
  }
  CompanyCreateInput: { // input type
    MarketingSource?: NexusGenInputs['MarketingSourceCreateNestedManyWithoutCompanyInput'] | null; // MarketingSourceCreateNestedManyWithoutCompanyInput
    admin: number; // Int!
    creation_date: NexusGenScalars['DateTime']; // DateTime!
    cron_enabled?: boolean | null; // Boolean
    digit8: number; // Int!
    image: string; // String!
    remote_connect?: string | null; // String
    remote_url?: string | null; // String
    slug?: string | null; // String
    user: string; // String!
  }
  CompanyCreateNestedOneWithoutMarketingSourceInput: { // input type
    connect?: NexusGenInputs['CompanyWhereUniqueInput'] | null; // CompanyWhereUniqueInput
    connectOrCreate?: NexusGenInputs['CompanyCreateOrConnectWithoutMarketingSourceInput'] | null; // CompanyCreateOrConnectWithoutMarketingSourceInput
    create?: NexusGenInputs['CompanyCreateWithoutMarketingSourceInput'] | null; // CompanyCreateWithoutMarketingSourceInput
  }
  CompanyCreateOrConnectWithoutMarketingSourceInput: { // input type
    create: NexusGenInputs['CompanyCreateWithoutMarketingSourceInput']; // CompanyCreateWithoutMarketingSourceInput!
    where: NexusGenInputs['CompanyWhereUniqueInput']; // CompanyWhereUniqueInput!
  }
  CompanyCreateWithoutMarketingSourceInput: { // input type
    admin: number; // Int!
    creation_date: NexusGenScalars['DateTime']; // DateTime!
    cron_enabled?: boolean | null; // Boolean
    digit8: number; // Int!
    image: string; // String!
    remote_connect?: string | null; // String
    remote_url?: string | null; // String
    slug?: string | null; // String
    user: string; // String!
  }
  CompanyOrderByInput: { // input type
    admin?: NexusGenEnums['SortOrder'] | null; // SortOrder
    creation_date?: NexusGenEnums['SortOrder'] | null; // SortOrder
    cron_enabled?: NexusGenEnums['SortOrder'] | null; // SortOrder
    digit8?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    image?: NexusGenEnums['SortOrder'] | null; // SortOrder
    remote_connect?: NexusGenEnums['SortOrder'] | null; // SortOrder
    remote_url?: NexusGenEnums['SortOrder'] | null; // SortOrder
    slug?: NexusGenEnums['SortOrder'] | null; // SortOrder
    user?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  CompanyUpdateInput: { // input type
    MarketingSource?: NexusGenInputs['MarketingSourceUpdateManyWithoutCompanyInput'] | null; // MarketingSourceUpdateManyWithoutCompanyInput
    admin?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    creation_date?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    cron_enabled?: NexusGenInputs['NullableBoolFieldUpdateOperationsInput'] | null; // NullableBoolFieldUpdateOperationsInput
    digit8?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    image?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    remote_connect?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    remote_url?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    slug?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    user?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
  }
  CompanyUpdateManyMutationInput: { // input type
    admin?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    creation_date?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    cron_enabled?: NexusGenInputs['NullableBoolFieldUpdateOperationsInput'] | null; // NullableBoolFieldUpdateOperationsInput
    digit8?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    image?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    remote_connect?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    remote_url?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    slug?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    user?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
  }
  CompanyUpdateOneRequiredWithoutMarketingSourceInput: { // input type
    connect?: NexusGenInputs['CompanyWhereUniqueInput'] | null; // CompanyWhereUniqueInput
    connectOrCreate?: NexusGenInputs['CompanyCreateOrConnectWithoutMarketingSourceInput'] | null; // CompanyCreateOrConnectWithoutMarketingSourceInput
    create?: NexusGenInputs['CompanyCreateWithoutMarketingSourceInput'] | null; // CompanyCreateWithoutMarketingSourceInput
    update?: NexusGenInputs['CompanyUpdateWithoutMarketingSourceInput'] | null; // CompanyUpdateWithoutMarketingSourceInput
    upsert?: NexusGenInputs['CompanyUpsertWithoutMarketingSourceInput'] | null; // CompanyUpsertWithoutMarketingSourceInput
  }
  CompanyUpdateWithoutMarketingSourceInput: { // input type
    admin?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    creation_date?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    cron_enabled?: NexusGenInputs['NullableBoolFieldUpdateOperationsInput'] | null; // NullableBoolFieldUpdateOperationsInput
    digit8?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    image?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    remote_connect?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    remote_url?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    slug?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    user?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
  }
  CompanyUpsertWithoutMarketingSourceInput: { // input type
    create: NexusGenInputs['CompanyCreateWithoutMarketingSourceInput']; // CompanyCreateWithoutMarketingSourceInput!
    update: NexusGenInputs['CompanyUpdateWithoutMarketingSourceInput']; // CompanyUpdateWithoutMarketingSourceInput!
  }
  CompanyWhereInput: { // input type
    AND?: NexusGenInputs['CompanyWhereInput'][] | null; // [CompanyWhereInput!]
    MarketingSource?: NexusGenInputs['MarketingSourceListRelationFilter'] | null; // MarketingSourceListRelationFilter
    NOT?: NexusGenInputs['CompanyWhereInput'][] | null; // [CompanyWhereInput!]
    OR?: NexusGenInputs['CompanyWhereInput'][] | null; // [CompanyWhereInput!]
    admin?: NexusGenInputs['IntFilter'] | null; // IntFilter
    creation_date?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    cron_enabled?: NexusGenInputs['BoolNullableFilter'] | null; // BoolNullableFilter
    digit8?: NexusGenInputs['IntFilter'] | null; // IntFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    image?: NexusGenInputs['StringFilter'] | null; // StringFilter
    remote_connect?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    remote_url?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    slug?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    user?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  CompanyWhereUniqueInput: { // input type
    id?: number | null; // Int
    slug?: string | null; // String
  }
  DateTimeFieldUpdateOperationsInput: { // input type
    set?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  DateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  IntFieldUpdateOperationsInput: { // input type
    decrement?: number | null; // Int
    divide?: number | null; // Int
    increment?: number | null; // Int
    multiply?: number | null; // Int
    set?: number | null; // Int
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  MarketingSourceCreateInput: { // input type
    company: NexusGenInputs['CompanyCreateNestedOneWithoutMarketingSourceInput']; // CompanyCreateNestedOneWithoutMarketingSourceInput!
    custom_id: number; // Int!
    imported: number; // Int!
    public: number; // Int!
    source_name: string; // String!
  }
  MarketingSourceCreateNestedManyWithoutCompanyInput: { // input type
    connect?: NexusGenInputs['MarketingSourceWhereUniqueInput'][] | null; // [MarketingSourceWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['MarketingSourceCreateOrConnectWithoutcompanyInput'][] | null; // [MarketingSourceCreateOrConnectWithoutcompanyInput!]
    create?: NexusGenInputs['MarketingSourceCreateWithoutCompanyInput'][] | null; // [MarketingSourceCreateWithoutCompanyInput!]
  }
  MarketingSourceCreateOrConnectWithoutcompanyInput: { // input type
    create: NexusGenInputs['MarketingSourceCreateWithoutCompanyInput']; // MarketingSourceCreateWithoutCompanyInput!
    where: NexusGenInputs['MarketingSourceWhereUniqueInput']; // MarketingSourceWhereUniqueInput!
  }
  MarketingSourceCreateWithoutCompanyInput: { // input type
    custom_id: number; // Int!
    imported: number; // Int!
    public: number; // Int!
    source_name: string; // String!
  }
  MarketingSourceListRelationFilter: { // input type
    every?: NexusGenInputs['MarketingSourceWhereInput'] | null; // MarketingSourceWhereInput
    none?: NexusGenInputs['MarketingSourceWhereInput'] | null; // MarketingSourceWhereInput
    some?: NexusGenInputs['MarketingSourceWhereInput'] | null; // MarketingSourceWhereInput
  }
  MarketingSourceOrderByInput: { // input type
    company?: NexusGenInputs['CompanyOrderByInput'] | null; // CompanyOrderByInput
    custom_id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    imported?: NexusGenEnums['SortOrder'] | null; // SortOrder
    occupier?: NexusGenEnums['SortOrder'] | null; // SortOrder
    public?: NexusGenEnums['SortOrder'] | null; // SortOrder
    source_name?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  MarketingSourceScalarWhereInput: { // input type
    AND?: NexusGenInputs['MarketingSourceScalarWhereInput'][] | null; // [MarketingSourceScalarWhereInput!]
    NOT?: NexusGenInputs['MarketingSourceScalarWhereInput'][] | null; // [MarketingSourceScalarWhereInput!]
    OR?: NexusGenInputs['MarketingSourceScalarWhereInput'][] | null; // [MarketingSourceScalarWhereInput!]
    custom_id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    imported?: NexusGenInputs['IntFilter'] | null; // IntFilter
    occupier?: NexusGenInputs['IntFilter'] | null; // IntFilter
    public?: NexusGenInputs['IntFilter'] | null; // IntFilter
    source_name?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  MarketingSourceUpdateInput: { // input type
    company?: NexusGenInputs['CompanyUpdateOneRequiredWithoutMarketingSourceInput'] | null; // CompanyUpdateOneRequiredWithoutMarketingSourceInput
    custom_id?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    imported?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    public?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    source_name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
  }
  MarketingSourceUpdateManyMutationInput: { // input type
    custom_id?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    imported?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    public?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    source_name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
  }
  MarketingSourceUpdateManyWithWhereWithoutCompanyInput: { // input type
    data: NexusGenInputs['MarketingSourceUpdateManyMutationInput']; // MarketingSourceUpdateManyMutationInput!
    where: NexusGenInputs['MarketingSourceScalarWhereInput']; // MarketingSourceScalarWhereInput!
  }
  MarketingSourceUpdateManyWithoutCompanyInput: { // input type
    connect?: NexusGenInputs['MarketingSourceWhereUniqueInput'][] | null; // [MarketingSourceWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['MarketingSourceCreateOrConnectWithoutcompanyInput'][] | null; // [MarketingSourceCreateOrConnectWithoutcompanyInput!]
    create?: NexusGenInputs['MarketingSourceCreateWithoutCompanyInput'][] | null; // [MarketingSourceCreateWithoutCompanyInput!]
    delete?: NexusGenInputs['MarketingSourceWhereUniqueInput'][] | null; // [MarketingSourceWhereUniqueInput!]
    deleteMany?: NexusGenInputs['MarketingSourceScalarWhereInput'][] | null; // [MarketingSourceScalarWhereInput!]
    disconnect?: NexusGenInputs['MarketingSourceWhereUniqueInput'][] | null; // [MarketingSourceWhereUniqueInput!]
    set?: NexusGenInputs['MarketingSourceWhereUniqueInput'][] | null; // [MarketingSourceWhereUniqueInput!]
    update?: NexusGenInputs['MarketingSourceUpdateWithWhereUniqueWithoutCompanyInput'][] | null; // [MarketingSourceUpdateWithWhereUniqueWithoutCompanyInput!]
    updateMany?: NexusGenInputs['MarketingSourceUpdateManyWithWhereWithoutCompanyInput'][] | null; // [MarketingSourceUpdateManyWithWhereWithoutCompanyInput!]
    upsert?: NexusGenInputs['MarketingSourceUpsertWithWhereUniqueWithoutCompanyInput'][] | null; // [MarketingSourceUpsertWithWhereUniqueWithoutCompanyInput!]
  }
  MarketingSourceUpdateWithWhereUniqueWithoutCompanyInput: { // input type
    data: NexusGenInputs['MarketingSourceUpdateWithoutCompanyInput']; // MarketingSourceUpdateWithoutCompanyInput!
    where: NexusGenInputs['MarketingSourceWhereUniqueInput']; // MarketingSourceWhereUniqueInput!
  }
  MarketingSourceUpdateWithoutCompanyInput: { // input type
    custom_id?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    imported?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    public?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    source_name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
  }
  MarketingSourceUpsertWithWhereUniqueWithoutCompanyInput: { // input type
    create: NexusGenInputs['MarketingSourceCreateWithoutCompanyInput']; // MarketingSourceCreateWithoutCompanyInput!
    update: NexusGenInputs['MarketingSourceUpdateWithoutCompanyInput']; // MarketingSourceUpdateWithoutCompanyInput!
    where: NexusGenInputs['MarketingSourceWhereUniqueInput']; // MarketingSourceWhereUniqueInput!
  }
  MarketingSourceWhereInput: { // input type
    AND?: NexusGenInputs['MarketingSourceWhereInput'][] | null; // [MarketingSourceWhereInput!]
    NOT?: NexusGenInputs['MarketingSourceWhereInput'][] | null; // [MarketingSourceWhereInput!]
    OR?: NexusGenInputs['MarketingSourceWhereInput'][] | null; // [MarketingSourceWhereInput!]
    company?: NexusGenInputs['CompanyWhereInput'] | null; // CompanyWhereInput
    custom_id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    imported?: NexusGenInputs['IntFilter'] | null; // IntFilter
    occupier?: NexusGenInputs['IntFilter'] | null; // IntFilter
    public?: NexusGenInputs['IntFilter'] | null; // IntFilter
    source_name?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  MarketingSourceWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  NestedBoolNullableFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: NexusGenInputs['NestedBoolNullableFilter'] | null; // NestedBoolNullableFilter
  }
  NestedDateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  NestedStringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  NullableBoolFieldUpdateOperationsInput: { // input type
    set?: boolean | null; // Boolean
  }
  NullableStringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  StringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  StringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
}

export interface NexusGenEnums {
  SortOrder: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  AffectedRowsOutput: { // root type
    count: number; // Int!
  }
  Company: { // root type
    admin: number; // Int!
    creation_date: NexusGenScalars['DateTime']; // DateTime!
    cron_enabled?: boolean | null; // Boolean
    digit8: number; // Int!
    id: number; // Int!
    image: string; // String!
    remote_connect?: string | null; // String
    remote_url?: string | null; // String
    slug?: string | null; // String
    user: string; // String!
  }
  MarketingSource: { // root type
    custom_id: number; // Int!
    id: number; // Int!
    imported: number; // Int!
    public: number; // Int!
    source_name: string; // String!
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  Mutation: {};
  // eslint-disable-next-line @typescript-eslint/ban-types
  Query: {};
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NexusGenInterfaces {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AffectedRowsOutput: { // field return type
    count: number; // Int!
  }
  Company: { // field return type
    admin: number; // Int!
    creation_date: NexusGenScalars['DateTime']; // DateTime!
    cron_enabled: boolean | null; // Boolean
    digit8: number; // Int!
    id: number; // Int!
    image: string; // String!
    remote_connect: string | null; // String
    remote_url: string | null; // String
    slug: string | null; // String
    user: string; // String!
  }
  MarketingSource: { // field return type
    company: NexusGenRootTypes['Company']; // Company!
    company_id: number; // Int!
    custom_id: number; // Int!
    id: number; // Int!
    imported: number; // Int!
    public: number; // Int!
    source_name: string; // String!
  }
  Mutation: { // field return type
    createOneCompany: NexusGenRootTypes['Company']; // Company!
    createOneMarketingSource: NexusGenRootTypes['MarketingSource']; // MarketingSource!
    deleteManyCompany: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    deleteOneCompany: NexusGenRootTypes['Company'] | null; // Company
    deleteOneMarketingSource: NexusGenRootTypes['MarketingSource'] | null; // MarketingSource
    updateManyCompany: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    updateOneCompany: NexusGenRootTypes['Company'] | null; // Company
    updateOneMarketingSource: NexusGenRootTypes['MarketingSource'] | null; // MarketingSource
    upsertOneCompany: NexusGenRootTypes['Company']; // Company!
  }
  Query: { // field return type
    companies: NexusGenRootTypes['Company'][]; // [Company!]!
    company: NexusGenRootTypes['Company'] | null; // Company
    marketingSource: NexusGenRootTypes['MarketingSource'] | null; // MarketingSource
    marketingSources: NexusGenRootTypes['MarketingSource'][]; // [MarketingSource!]!
  }
}

export interface NexusGenFieldTypeNames {
  AffectedRowsOutput: { // field return type name
    count: 'Int'
  }
  Company: { // field return type name
    admin: 'Int'
    creation_date: 'DateTime'
    cron_enabled: 'Boolean'
    digit8: 'Int'
    id: 'Int'
    image: 'String'
    remote_connect: 'String'
    remote_url: 'String'
    slug: 'String'
    user: 'String'
  }
  MarketingSource: { // field return type name
    company: 'Company'
    company_id: 'Int'
    custom_id: 'Int'
    id: 'Int'
    imported: 'Int'
    public: 'Int'
    source_name: 'String'
  }
  Mutation: { // field return type name
    createOneCompany: 'Company'
    createOneMarketingSource: 'MarketingSource'
    deleteManyCompany: 'AffectedRowsOutput'
    deleteOneCompany: 'Company'
    deleteOneMarketingSource: 'MarketingSource'
    updateManyCompany: 'AffectedRowsOutput'
    updateOneCompany: 'Company'
    updateOneMarketingSource: 'MarketingSource'
    upsertOneCompany: 'Company'
  }
  Query: { // field return type name
    companies: 'Company'
    company: 'Company'
    marketingSource: 'MarketingSource'
    marketingSources: 'MarketingSource'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneCompany: { // args
      data: NexusGenInputs['CompanyCreateInput']; // CompanyCreateInput!
    }
    createOneMarketingSource: { // args
      data: NexusGenInputs['MarketingSourceCreateInput']; // MarketingSourceCreateInput!
    }
    deleteManyCompany: { // args
      where?: NexusGenInputs['CompanyWhereInput'] | null; // CompanyWhereInput
    }
    deleteOneCompany: { // args
      where: NexusGenInputs['CompanyWhereUniqueInput']; // CompanyWhereUniqueInput!
    }
    deleteOneMarketingSource: { // args
      where: NexusGenInputs['MarketingSourceWhereUniqueInput']; // MarketingSourceWhereUniqueInput!
    }
    updateManyCompany: { // args
      data: NexusGenInputs['CompanyUpdateManyMutationInput']; // CompanyUpdateManyMutationInput!
      where?: NexusGenInputs['CompanyWhereInput'] | null; // CompanyWhereInput
    }
    updateOneCompany: { // args
      data: NexusGenInputs['CompanyUpdateInput']; // CompanyUpdateInput!
      where: NexusGenInputs['CompanyWhereUniqueInput']; // CompanyWhereUniqueInput!
    }
    updateOneMarketingSource: { // args
      data: NexusGenInputs['MarketingSourceUpdateInput']; // MarketingSourceUpdateInput!
      where: NexusGenInputs['MarketingSourceWhereUniqueInput']; // MarketingSourceWhereUniqueInput!
    }
    upsertOneCompany: { // args
      create: NexusGenInputs['CompanyCreateInput']; // CompanyCreateInput!
      update: NexusGenInputs['CompanyUpdateInput']; // CompanyUpdateInput!
      where: NexusGenInputs['CompanyWhereUniqueInput']; // CompanyWhereUniqueInput!
    }
  }
  Query: {
    companies: { // args
      after?: NexusGenInputs['CompanyWhereUniqueInput'] | null; // CompanyWhereUniqueInput
      before?: NexusGenInputs['CompanyWhereUniqueInput'] | null; // CompanyWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['CompanyOrderByInput'][] | null; // [CompanyOrderByInput!]
      where?: NexusGenInputs['CompanyWhereInput'] | null; // CompanyWhereInput
    }
    company: { // args
      where: NexusGenInputs['CompanyWhereUniqueInput']; // CompanyWhereUniqueInput!
    }
    marketingSource: { // args
      id: number; // Int!
    }
    marketingSources: { // args
      after?: NexusGenInputs['MarketingSourceWhereUniqueInput'] | null; // MarketingSourceWhereUniqueInput
      before?: NexusGenInputs['MarketingSourceWhereUniqueInput'] | null; // MarketingSourceWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['MarketingSourceOrderByInput'][] | null; // [MarketingSourceOrderByInput!]
      where?: NexusGenInputs['MarketingSourceWhereInput'] | null; // MarketingSourceWhereInput
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NexusGenAbstractTypeMembers {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-interface
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface NexusGenPluginSchemaConfig {
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface NexusGenPluginArgConfig {
  }
}
