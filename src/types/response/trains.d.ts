import type {
  ClassObject,
  Features,
  FeaturesProperty,
  HasLocationWIthRotation,
  InventoryItemObject, PowerInfoObject
} from '../general';
import {TrainDockingStatus, type TrainLoadingMode, TrainLoadingStatus, TrainStatus} from '../../enums/train';
import {Building} from '../../enums/building';

type TrainObject = ClassObject & HasLocationWIthRotation & {
  TotalMass: number;
  PayloadMass: number;
  MaxPayloadMass: number;
  ForwardSpeed: number;
  ThrottlePercent: number;
  TrainStation: string;
  Derailed: boolean;
  PendingDerail: boolean;
  Status: TrainStatus;
  TimeTable: {
    StationName: string;
  }[];
  Vehicles: (ClassObject & {
    TotalMass: number;
    PayloadMass: number;
    MaxPayloadMass: number;
    Inventory: InventoryItemObject[];
  })[];
  features: Features<FeaturesProperty<'Train'>>;
};

type TrainStationCargoInventoryObject = ClassObject<Building.TrainDockingStation> & HasLocationWIthRotation & {
  PowerInfo: PowerInfoObject;
  TransferRate: number;
  InflowRate: number;
  OutflowRate: number;
  LoadingMode: TrainLoadingMode;
  LoadingStatus: TrainLoadingStatus;
  DockingStatus: TrainDockingStatus;
  Inventory: InventoryItemObject[];
};

type TrainStationObject = ClassObject<'FGTrainStationIdentifier'> & HasLocationWIthRotation & {
  TransferRate: number;
  InflowRate: number;
  OutflowRate: number;
  CargoInventory: TrainStationCargoInventoryObject[];
  CircuitID: number;
  PowerInfo: PowerInfoObject;
  features: Features<FeaturesProperty<'Train Station'>>
};

type GetTrainsResponse = TrainObject[];
type GetTrainStationResponse = TrainStationObject[];

export type {
  GetTrainsResponse,
  GetTrainStationResponse,
  TrainStationCargoInventoryObject,
  TrainStationObject,
  TrainObject,
};