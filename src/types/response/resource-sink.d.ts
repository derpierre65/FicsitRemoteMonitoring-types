import type {ClassObject} from '../general';

type GetResourceSinkResponse = ClassObject & {
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

type GetExplorationSinkResponse = GetResourceSinkResponse;

export type {
  GetResourceSinkResponse,
  GetExplorationSinkResponse,
};