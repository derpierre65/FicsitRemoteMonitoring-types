import type {ClassObject, CoordinatesWithRotation, FeatureProperty, GeometryPoint, IDClassObject} from '../general';

type DoggoInventory = ClassObject & {
  Amount: number;
};

type Doggo = IDClassObject & {
  location: CoordinatesWithRotation;
  PlayerID: DoggoInventory[];
  features: {
    properties: FeatureProperty<'Lizard Doggo'>;
    geometry: GeometryPoint;
  };
};

type GetDoggoResponse = Doggo[];

export type {
  GetDoggoResponse,
  DoggoInventory,
  Doggo,
};