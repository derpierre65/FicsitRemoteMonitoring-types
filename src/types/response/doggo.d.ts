import type {
  Features,
  FeaturesProperty,
  HasLocationWithRotation,
  IDClassObject,
  InventoryItemObject,
} from '../general';
import {EntityType} from '../../enums/entity-type';

type DoggoObject = IDClassObject<EntityType.Doggo> & HasLocationWithRotation & {
  Inventory: InventoryItemObject[];
  features: Features<FeaturesProperty<'Lizard Doggo'>>;
};

type GetDoggoResponse = DoggoObject[];

export type {
  GetDoggoResponse,
  DoggoObject,
};