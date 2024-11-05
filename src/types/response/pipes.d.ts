import type {
  IDClassObject,
  Coordinates,
  Features,
  HasLocationWithRotation,
  PowerInfoObject
} from '../general';

type PumpObject = HasLocationWithRotation & {
  ID: string;
  Name: string;
  PowerInfo: PowerInfoObject;
};

type PipesObject = IDClassObject & {
  location0: Coordinates;
  Connected0: boolean;
  location1: Coordinates;
  Connected1: boolean;
  Length: number;
  Speed: number;
  features: Features;
};

type GetPipesResponse = PipesObject[];
type GetPumpResponse = PumpObject[];

export type {
  PumpObject,
  PipesObject,
  GetPipesResponse,
  GetPumpResponse,
};