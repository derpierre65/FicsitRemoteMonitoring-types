import type {Features, FeaturesProperty, HasLocationWithRotation, IDClassObject} from '../general';
import {ResourceNodePurity} from '../../enums/resource';

type ResourceNodeObject = IDClassObject & HasLocationWithRotation & {
  Purity: string;
  EnumPurity: ResourceNodePurity;
  ResourceForm: string;
  NodeType: string;
  Exploited: boolean;
  features: Features<FeaturesProperty<'Resource Node'>>;
};

type GetResourceNodeResponse = ResourceNodeObject[];
type GetResourceWellResponse = ResourceNodeObject[];
type GetResourceGeyserResponse = ResourceNodeObject[];

export type {
  ResourceNodeObject,
  GetResourceNodeResponse,
  GetResourceWellResponse,
  GetResourceGeyserResponse,
}