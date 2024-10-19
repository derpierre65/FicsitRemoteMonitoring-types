import type {ClassObject} from '../general';

type GetResourceSinkObject = ClassObject & {
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

type GetResourceSinkResponse = GetResourceSinkObject[];
type GetExplorationSinkResponse = GetResourceSinkObject[];

export type {
  GetResourceSinkObject,
  GetResourceSinkResponse,
  GetExplorationSinkResponse,
};