import type {ClassAndName, CoordinatesWithRotation, GeometryPoint} from '../general';

type DoggoInventory = ClassAndName & {
  Amount: number;
};

type Doggo = ClassAndName & {
  ID: number;
  location: CoordinatesWithRotation;
  PlayerID: DoggoInventory[];
  features: {
    properties: {
      name: string;
      type: 'Lizard Doggo';
    };
    geometry: GeometryPoint;
  };
};

type GetDoggoResponse = Doggo[];

export type {
  GetDoggoResponse,
  DoggoInventory,
  Doggo,
};