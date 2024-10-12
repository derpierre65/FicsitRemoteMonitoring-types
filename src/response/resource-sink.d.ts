type GetResourceSinkResponse = {
  Name: string;
  ClassName: string;
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