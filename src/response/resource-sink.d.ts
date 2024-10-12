import {ClassAndName} from '../general';

type GetResourceSinkResponse = ClassAndName & {
  CouponType: {
    Name: string;
    ClassName: string;
  };
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

export type {
  GetResourceSinkResponse,
};