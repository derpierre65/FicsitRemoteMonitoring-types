import type {
  CoordinatesWithRotation,
  Features,
  FeaturesProperty,
  IDClassObject,
  InventoryItemObject,
} from '../general';
import {EntityType} from '../../enums/entity-type';

type DoggoObject = IDClassObject<EntityType.Doggo> & {
  location: CoordinatesWithRotation;
  Inventory: InventoryItemObject[];
  features: Features<FeaturesProperty<'Lizard Doggo'>>;
};

type GetDoggoResponse = DoggoObject[];

export type {
  GetDoggoResponse,
  DoggoObject,
};