import type {ClassObject, HasLocationWIthRotation, PowerInfoObject} from '../general';

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

type SinkListObject = ClassObject & {
  Points: number;
  PointsOverride: number;
};

type ResourceSinkBuildingObject = HasLocationWIthRotation & {
  ID: number;
  PowerInfo: PowerInfoObject;
};

type GetResourceSinkBuildingResponse = ResourceSinkBuildingObject[];
type GetSinkListResponse = SinkListObject[];
type GetResourceSinkResponse = ResourceSinkObject[];
type GetExplorationSinkResponse = ResourceSinkObject[];

export type {
  ResourceSinkObject,
  SinkListObject,
  ResourceSinkBuildingObject,
  GetResourceSinkBuildingResponse,
  GetSinkListResponse,
  GetResourceSinkResponse,
  GetExplorationSinkResponse,
};