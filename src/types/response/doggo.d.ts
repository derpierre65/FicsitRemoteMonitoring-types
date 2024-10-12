import type {
  ClassObject,
  CoordinatesWithRotation,
  Features,
  FeaturesProperty,
  IDClassObject
} from '../general';

type DoggoInventory = ClassObject & {
  Amount: number;
};

type Doggo = IDClassObject & {
  location: CoordinatesWithRotation;
  PlayerID: DoggoInventory[];
  features: Features<FeaturesProperty<'Lizard Doggo'>>;
};

type GetDoggoResponse = Doggo[];

export type {
  GetDoggoResponse,
  DoggoInventory,
  Doggo,
};