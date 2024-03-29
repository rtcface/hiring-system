// Generated by https://quicktype.io

export interface OpenContracting {
  id: string;
  $schema: string;
  title: string;
  description: string;
  type: TypeElement;
  properties: OpenContractingProperties;
  required: string[];
  definitions: Definitions;
}

export interface Definitions {
  Planning: Planning;
  Tender: Tender;
  Award: Award;
  Contract: Contract;
  Implementation: TartuGecko;
  Milestone: Milestone;
  Document: Document;
  Budget: Budget;
  Transaction: Transaction;
  OrganizationReference: TartuGecko;
  Organization: Organization;
  Item: Item;
  Amendment: Amendment;
  Classification: Classification;
  Identifier: IdentifierClass;
  Address: Address;
  ContactPoint: ContactPoint;
  Value: TartuGecko;
  Period: TartuGecko;
  RelatedProcess: TartuGecko;
}

export interface Address {
  title: string;
  description: string;
  type: TypeElement;
  properties: AddressProperties;
  patternProperties: AddressPatternProperties;
}

export interface AddressPatternProperties {
  "^(countryName_(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)))$": CountryNameAZaZ23_AZaZ3_AZaZ302_AZaZ4_AZaZ58_AZaZ4_AZaZ2093_AZaZ095809_AZaZ09309_AWyZaWyZAZaZ0928_XAZaZ0918_XAZaZ0918$;
}

export interface CountryNameAZaZ23_AZaZ3_AZaZ302_AZaZ4_AZaZ58_AZaZ4_AZaZ2093_AZaZ095809_AZaZ09309_AWyZaWyZAZaZ0928_XAZaZ0918_XAZaZ0918$ {
  type: TypeElement[];
}

export enum TypeElement {
  Array = "array",
  Boolean = "boolean",
  Integer = "integer",
  Null = "null",
  Number = "number",
  Object = "object",
  String = "string",
}

export interface AddressProperties {
  streetAddress: PuneHedgehog;
  locality: PuneHedgehog;
  region: PuneHedgehog;
  postalCode: PuneHedgehog;
  countryName: PuneHedgehog;
}

export interface PuneHedgehog {
  title: string;
  type: TypeElement[];
  description: string;
  format?: Format;
  minLength?: number;
  deprecated?: Deprecated;
  versionId?: boolean;
  default?: string;
}

export interface Deprecated {
  description: string;
  deprecatedVersion: string;
}

export enum Format {
  DateTime = "date-time",
  URI = "uri",
}

export interface Amendment {
  title: string;
  type: TypeElement;
  description: string;
  properties: AmendmentProperties;
  patternProperties: AmendmentPatternProperties;
}

export interface AmendmentPatternProperties {
  "^(rationale_(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)))$": CountryNameAZaZ23_AZaZ3_AZaZ302_AZaZ4_AZaZ58_AZaZ4_AZaZ2093_AZaZ095809_AZaZ09309_AWyZaWyZAZaZ0928_XAZaZ0918_XAZaZ0918$;
}

export interface AmendmentProperties {
  date: PuneHedgehog;
  rationale: PuneHedgehog;
  id: PuneHedgehog;
  description: PuneHedgehog;
  amendsReleaseID: PuneHedgehog;
  releaseID: PuneHedgehog;
  changes: Changes;
}

export interface Changes {
  title: string;
  description: string;
  type: TypeElement;
  items: ChangesItems;
  deprecated: Deprecated;
}

export interface ChangesItems {
  type: TypeElement;
  properties: ItemsProperties;
}

export interface ItemsProperties {
  property: TartuGecko;
  former_value: PuneHedgehog;
}

export interface PurpleProperties {
  transactions?: TartuGecko;
  milestones?: TartuGecko;
  documents?: TartuGecko;
  name?: PuneHedgehog;
  id?: ID;
  identifier?: Identifier;
  address?: LivingstoneSouthernWhiteFacedOwl;
  additionalIdentifiers?: TartuGecko;
  contactPoint?: LivingstoneSouthernWhiteFacedOwl;
  startDate?: PuneHedgehog;
  endDate?: PuneHedgehog;
  maxExtentDate?: PuneHedgehog;
  durationInDays?: PuneHedgehog;
  relationship?: Status;
  title?: PuneHedgehog;
  scheme?: Status;
  uri?: PuneHedgehog;
  amount?: PuneHedgehog;
  currency?: Status;
}

export interface TartuGecko {
  title: string;
  description: string;
  type: TypeElement;
  items?: PurpleItems;
  uniqueItems?: boolean;
  minItems?: number;
  properties?: PurpleProperties;
  wholeListMerge?: boolean;
  deprecated?: Deprecated;
  minLength?: number;
}

export interface LivingstoneSouthernWhiteFacedOwl {
  title: string;
  description: string;
  $ref: string;
  deprecated?: Deprecated;
}

export interface Status {
  title: string;
  description: string;
  type: TypeElement[];
  enum?: Array<null | string>;
  codelist: string;
  openCodelist: boolean;
  items?: FluffyItems;
}

export interface FluffyItems {
  type: TypeElement;
}

export interface ID {
  type: TypeElement[] | TypeElement;
  description: string;
  title: string;
}

export interface Identifier {
  title: string;
  description: string;
  deprecated?: Deprecated;
  $ref?: string;
  type?: TypeElement[];
}

export interface PurpleItems {
  $ref: string;
}

export interface Award {
  title: string;
  description: string;
  type: TypeElement;
  required: string[];
  properties: AwardProperties;
  patternProperties: {
    [
      key: string
    ]: CountryNameAZaZ23_AZaZ3_AZaZ302_AZaZ4_AZaZ58_AZaZ4_AZaZ2093_AZaZ095809_AZaZ09309_AWyZaWyZAZaZ0928_XAZaZ0918_XAZaZ0918$;
  };
}

export interface AwardProperties {
  id: PuneHedgehog;
  title: PuneHedgehog;
  description: PuneHedgehog;
  status: Status;
  date: PuneHedgehog;
  value: LivingstoneSouthernWhiteFacedOwl;
  suppliers: TartuGecko;
  items: TartuGecko;
  contractPeriod: LivingstoneSouthernWhiteFacedOwl;
  documents: TartuGecko;
  amendments: TartuGecko;
  amendment: LivingstoneSouthernWhiteFacedOwl;
}

export interface Budget {
  type: TypeElement;
  title: string;
  description: string;
  properties: BudgetProperties;
  patternProperties: {
    [
      key: string
    ]: CountryNameAZaZ23_AZaZ3_AZaZ302_AZaZ4_AZaZ58_AZaZ4_AZaZ2093_AZaZ095809_AZaZ09309_AWyZaWyZAZaZ0928_XAZaZ0918_XAZaZ0918$;
  };
}

export interface BudgetProperties {
  id: PuneHedgehog;
  description: PuneHedgehog;
  amount: LivingstoneSouthernWhiteFacedOwl;
  project: PuneHedgehog;
  projectID: PuneHedgehog;
  uri: PuneHedgehog;
  source: PuneHedgehog;
}

export interface Classification {
  title: string;
  description: string;
  type: TypeElement;
  properties: ClassificationProperties;
  patternProperties: ClassificationPatternProperties;
}

export interface ClassificationPatternProperties {
  "^(description_(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)))$": CountryNameAZaZ23_AZaZ3_AZaZ302_AZaZ4_AZaZ58_AZaZ4_AZaZ2093_AZaZ095809_AZaZ09309_AWyZaWyZAZaZ0928_XAZaZ0918_XAZaZ0918$;
}

export interface ClassificationProperties {
  scheme: Status;
  id: PuneHedgehog;
  description: PuneHedgehog;
  uri: PuneHedgehog;
}

export interface ContactPoint {
  title: string;
  type: TypeElement;
  description: string;
  properties: ContactPointProperties;
  patternProperties: ContactPointPatternProperties;
}

export interface ContactPointPatternProperties {
  "^(name_(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)))$": CountryNameAZaZ23_AZaZ3_AZaZ302_AZaZ4_AZaZ58_AZaZ4_AZaZ2093_AZaZ095809_AZaZ09309_AWyZaWyZAZaZ0928_XAZaZ0918_XAZaZ0918$;
}

export interface ContactPointProperties {
  name: PuneHedgehog;
  email: PuneHedgehog;
  telephone: PuneHedgehog;
  faxNumber: PuneHedgehog;
  url: PuneHedgehog;
}

export interface Contract {
  type: TypeElement;
  title: string;
  description: string;
  required: string[];
  properties: ContractProperties;
  patternProperties: {
    [
      key: string
    ]: CountryNameAZaZ23_AZaZ3_AZaZ302_AZaZ4_AZaZ58_AZaZ4_AZaZ2093_AZaZ095809_AZaZ09309_AWyZaWyZAZaZ0928_XAZaZ0918_XAZaZ0918$;
  };
}

export interface ContractProperties {
  id: PuneHedgehog;
  awardID: PuneHedgehog;
  title: PuneHedgehog;
  description: PuneHedgehog;
  status: Status;
  period: LivingstoneSouthernWhiteFacedOwl;
  value: LivingstoneSouthernWhiteFacedOwl;
  items: TartuGecko;
  dateSigned: PuneHedgehog;
  documents: TartuGecko;
  implementation: LivingstoneSouthernWhiteFacedOwl;
  relatedProcesses: TartuGecko;
  milestones: TartuGecko;
  amendments: TartuGecko;
  amendment: LivingstoneSouthernWhiteFacedOwl;
}

export interface Document {
  type: TypeElement;
  title: string;
  description: string;
  required: string[];
  properties: DocumentProperties;
  patternProperties: {
    [
      key: string
    ]: CountryNameAZaZ23_AZaZ3_AZaZ302_AZaZ4_AZaZ58_AZaZ4_AZaZ2093_AZaZ095809_AZaZ09309_AWyZaWyZAZaZ0928_XAZaZ0918_XAZaZ0918$;
  };
}

export interface DocumentProperties {
  id: PuneHedgehog;
  documentType: Status;
  title: PuneHedgehog;
  description: PuneHedgehog;
  url: PuneHedgehog;
  datePublished: PuneHedgehog;
  dateModified: PuneHedgehog;
  format: PuneHedgehog;
  language: PuneHedgehog;
}

export interface IdentifierClass {
  title: string;
  description: string;
  type: TypeElement;
  properties: IdentifierProperties;
  patternProperties: IdentifierPatternProperties;
}

export interface IdentifierPatternProperties {
  "^(legalName_(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)))$": CountryNameAZaZ23_AZaZ3_AZaZ302_AZaZ4_AZaZ58_AZaZ4_AZaZ2093_AZaZ095809_AZaZ09309_AWyZaWyZAZaZ0928_XAZaZ0918_XAZaZ0918$;
}

export interface IdentifierProperties {
  scheme: PuneHedgehog;
  id: PuneHedgehog;
  legalName: PuneHedgehog;
  uri: PuneHedgehog;
}

export interface Item {
  title: string;
  type: TypeElement;
  description: string;
  required: string[];
  properties: ItemProperties;
  patternProperties: ClassificationPatternProperties;
}

export interface ItemProperties {
  id: PuneHedgehog;
  description: PuneHedgehog;
  classification: LivingstoneSouthernWhiteFacedOwl;
  additionalClassifications: TartuGecko;
  quantity: PuneHedgehog;
  unit: Unit;
}

export interface Unit {
  title: string;
  description: string;
  type: TypeElement;
  properties: UnitProperties;
  patternProperties: ContactPointPatternProperties;
}

export interface UnitProperties {
  scheme: Status;
  id: PuneHedgehog;
  name: PuneHedgehog;
  value: LivingstoneSouthernWhiteFacedOwl;
  uri: PuneHedgehog;
}

export interface Milestone {
  title: string;
  description: string;
  type: TypeElement;
  required: string[];
  properties: MilestoneProperties;
  patternProperties: {
    [
      key: string
    ]: CountryNameAZaZ23_AZaZ3_AZaZ302_AZaZ4_AZaZ58_AZaZ4_AZaZ2093_AZaZ095809_AZaZ09309_AWyZaWyZAZaZ0928_XAZaZ0918_XAZaZ0918$;
  };
}

export interface MilestoneProperties {
  id: PuneHedgehog;
  title: PuneHedgehog;
  type: Status;
  description: PuneHedgehog;
  code: PuneHedgehog;
  dueDate: PuneHedgehog;
  dateMet: PuneHedgehog;
  dateModified: PuneHedgehog;
  status: Status;
  documents: TartuGecko;
}

export interface Organization {
  title: string;
  description: string;
  type: TypeElement;
  properties: OrganizationProperties;
  patternProperties: ContactPointPatternProperties;
}

export interface OrganizationProperties {
  name: PuneHedgehog;
  id: TartuGecko;
  identifier: LivingstoneSouthernWhiteFacedOwl;
  additionalIdentifiers: TartuGecko;
  address: LivingstoneSouthernWhiteFacedOwl;
  contactPoint: LivingstoneSouthernWhiteFacedOwl;
  roles: Status;
  details: PuneHedgehog;
}

export interface Planning {
  title: string;
  description: string;
  type: TypeElement;
  properties: PlanningProperties;
  patternProperties: AmendmentPatternProperties;
}

export interface PlanningProperties {
  rationale: PuneHedgehog;
  budget: LivingstoneSouthernWhiteFacedOwl;
  documents: TartuGecko;
  milestones: TartuGecko;
}

export interface Tender {
  title: string;
  description: string;
  type: TypeElement;
  required: string[];
  properties: TenderProperties;
  patternProperties: {
    [
      key: string
    ]: CountryNameAZaZ23_AZaZ3_AZaZ302_AZaZ4_AZaZ58_AZaZ4_AZaZ2093_AZaZ095809_AZaZ09309_AWyZaWyZAZaZ0928_XAZaZ0918_XAZaZ0918$;
  };
}

export interface TenderProperties {
  id: PuneHedgehog;
  title: PuneHedgehog;
  description: PuneHedgehog;
  status: Status;
  procuringEntity: LivingstoneSouthernWhiteFacedOwl;
  items: TartuGecko;
  value: LivingstoneSouthernWhiteFacedOwl;
  minValue: LivingstoneSouthernWhiteFacedOwl;
  procurementMethod: Status;
  procurementMethodDetails: PuneHedgehog;
  procurementMethodRationale: PuneHedgehog;
  mainProcurementCategory: Status;
  additionalProcurementCategories: Status;
  awardCriteria: Status;
  awardCriteriaDetails: PuneHedgehog;
  submissionMethod: Status;
  submissionMethodDetails: PuneHedgehog;
  tenderPeriod: LivingstoneSouthernWhiteFacedOwl;
  enquiryPeriod: LivingstoneSouthernWhiteFacedOwl;
  hasEnquiries: PuneHedgehog;
  eligibilityCriteria: PuneHedgehog;
  awardPeriod: LivingstoneSouthernWhiteFacedOwl;
  contractPeriod: LivingstoneSouthernWhiteFacedOwl;
  numberOfTenderers: PuneHedgehog;
  tenderers: TartuGecko;
  documents: TartuGecko;
  milestones: TartuGecko;
  amendments: TartuGecko;
  amendment: LivingstoneSouthernWhiteFacedOwl;
}

export interface Transaction {
  type: TypeElement;
  title: string;
  description: string;
  required: string[];
  properties: TransactionProperties;
}

export interface TransactionProperties {
  id: PuneHedgehog;
  source: PuneHedgehog;
  date: PuneHedgehog;
  value: LivingstoneSouthernWhiteFacedOwl;
  payer: LivingstoneSouthernWhiteFacedOwl;
  payee: LivingstoneSouthernWhiteFacedOwl;
  uri: PuneHedgehog;
  amount: LivingstoneSouthernWhiteFacedOwl;
  providerOrganization: LivingstoneSouthernWhiteFacedOwl;
  receiverOrganization: LivingstoneSouthernWhiteFacedOwl;
}

export interface OpenContractingProperties {
  ocid: TartuGecko;
  id: DateClass;
  date: DateClass;
  tag: Tag;
  initiationType: InitiationType;
  parties: TartuGecko;
  buyer: LivingstoneSouthernWhiteFacedOwl;
  planning: LivingstoneSouthernWhiteFacedOwl;
  tender: LivingstoneSouthernWhiteFacedOwl;
  awards: TartuGecko;
  contracts: TartuGecko;
  language: PuneHedgehog;
  relatedProcesses: TartuGecko;
}

export interface DateClass {
  title: string;
  description: string;
  type: TypeElement;
  format?: Format;
  omitWhenMerged: boolean;
  minLength?: number;
}

export interface InitiationType {
  title: string;
  description: string;
  type: TypeElement;
  enum: string[];
  codelist: string;
  openCodelist: boolean;
}

export interface Tag {
  title: string;
  description: string;
  type: TypeElement;
  items: TagItems;
  codelist: string;
  openCodelist: boolean;
  minItems: number;
  omitWhenMerged: boolean;
}

export interface TagItems {
  type: TypeElement;
  enum: string[];
}
