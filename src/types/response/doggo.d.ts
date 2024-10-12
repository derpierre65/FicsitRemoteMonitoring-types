import type {ClassObject, CoordinatesWithRotation, FeaturesProperty, GeometryPoint, IDClassObject} from '../general';

type DoggoInventory = ClassObject & {
  Amount: number;
};

type Doggo = IDClassObject & {
  location: CoordinatesWithRotation;
  PlayerID: DoggoInventory[];
  features: {
    properties: FeaturesProperty<'Lizard Doggo'>;
    geometry: GeometryPoint;
  };
};

type GetDoggoResponse = Doggo[];

export type {
  GetDoggoResponse,
  DoggoInventory,
  Doggo,
};