import type {ClassObject} from '../general';

type ResourceSinkObject = ClassObject & {
  CouponType: ClassObject;
  NumCoupon: number;
  Percent: number;
  GraphPoints: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  TotalPoints: number;
  PointsToCoupon: number;
};

type GetResourceSinkResponse = ResourceSinkObject[];
type GetExplorationSinkResponse = ResourceSinkObject[];

export type {
  ResourceSinkObject,
  GetResourceSinkResponse,
  GetExplorationSinkResponse,
};