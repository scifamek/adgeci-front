export interface IEntitySchemaModel {
  id?: string;
  collection: string;
  type: ISchemaType;
  module: string;
  presentation: IPresentation;
  display: string;
  repr: string[];
  definition: IDefinition;
}

export type ISchemaType = 'entity' | '';
export interface IDefinition {
  [index: string]: IDefinitionProperties;
}

export interface IDefinitionProperties {
  display: string;
  usable: boolean;
  visible: boolean;
  type: string;
  required: boolean;
  relationship?: string;
}

export interface IPresentation {
  icon: string;
}
