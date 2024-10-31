import type {
  Features,
  FeaturesProperty,
  HasLocationWIthRotation,
  IDClassObject,
  InventoryItemObject,
} from '../general';
import {EntityType} from '../../enums/entity-type';

type DoggoObject = IDClassObject<EntityType.Doggo> & HasLocationWIthRotation & {
  Inventory: InventoryItemObject[];
  features: Features<FeaturesProperty<'Lizard Doggo'>>;
};

type GetDoggoResponse = DoggoObject[];

export type {
  GetDoggoResponse,
  DoggoObject,
};