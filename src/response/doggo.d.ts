import type {CoordinatesWithRotation, GeometryPoint} from '../general';

type DoggoInventory = {
  Name: string;
  ClassName: string;
  Amount: number;
};

type Doggo = {
  ID: number;
  Name: string;
  ClassName: string;
  location: CoordinatesWithRotation;
  PlayerID: DoggoInventory[];
  features: {
    properties: {
      name: string;
      type: string;
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