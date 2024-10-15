import type {
  CoordinatesWithRotation,
  Features,
  FeaturesProperty,
  IDClassObject,
  InventoryItemObject,
} from '../general';

type Doggo = IDClassObject & {
  location: CoordinatesWithRotation;
  PlayerID: InventoryItemObject[];
  features: Features<FeaturesProperty<'Lizard Doggo'>>;
};

type GetDoggoResponse = Doggo[];

export type {
  GetDoggoResponse,
  Doggo,
};