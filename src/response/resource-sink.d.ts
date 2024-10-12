import {ClassAndName} from '../general';

type GetResourceSinkResponse = ClassAndName & {
  CouponType: ClassAndName;
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