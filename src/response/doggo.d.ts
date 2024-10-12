import {GameCoordinates, GameCoordinatesWithRotation, GeometryType} from '../general';

type DoggoInventory = {
  Name: string;
  ClassName: string;
  Amount: number;
};

type Doggo = {
  ID: number;
  Name: string;
  ClassName: string;
  location: GameCoordinatesWithRotation;
  PlayerID: DoggoInventory[];
  features: {
    properties: {
      name: string;
      type: string;
    };
    geometry: {
      type: GeometryType;
      coordinates: GameCoordinates;
    };
  };
};

type GetDoggoResponse = Doggo[];

export type {
  GetDoggoResponse,
  DoggoInventory,
  Doggo,
};