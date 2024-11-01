import type {
  ClassObject,
  Coordinates,
  Features,
  HasLocationWithRotation,
  PowerInfoObject
} from '../general';

type PumpObject = HasLocationWithRotation & {
  Name: string;
  PowerInfo: PowerInfoObject;
};

type PipesObject = ClassObject & {
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