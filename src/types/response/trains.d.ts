import type {ClassObject, CoordinatesWithRotation, Features, FeaturesProperty} from '../general';

type TrainObject = ClassObject & {
  location: CoordinatesWithRotation;
  TotalMass: number;
  PayloadMass: number;
  MaxPayloadMass: number;
  ForwardSpeed: number;
  ThrottlePercent: number;
  TrainStation: string;
  Derailed: boolean;
  PendingDerail: boolean;
  Status: 'Derailed';
  TimeTable: {
    StationName: string;
  }[];
  features: Features<FeaturesProperty<'Train'>>;
};

type GetTrainsResponse = TrainObject[];

export type {
  GetTrainsResponse,
  TrainObject,
};