import type {ClassObject, Coordinates, Features} from '../general';

type BeltsObject = ClassObject & {
  location0: Coordinates;
  Connected0: boolean;
  location1: Coordinates;
  Connected1: boolean;
  Length: number;
  ItemsPerMinute: number;
  features: Features;
};

type GetBeltsResponse = BeltsObject[];

export type {
  BeltsObject,
  GetBeltsResponse,
}