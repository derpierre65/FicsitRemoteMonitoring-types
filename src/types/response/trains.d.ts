import type {
  ClassObject,
  Features,
  FeaturesProperty,
  HasLocationWithRotation, IDClassObject,
  InventoryItemObject, PowerInfoObject
} from '../general';
import {TrainDockingStatus, type TrainLoadingMode, TrainLoadingStatus, TrainStatus} from '../../enums/train';
import {Building} from '../../enums/building';

type TrainObject = IDClassObject & HasLocationWithRotation & {
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

type TrainStationCargoInventoryObject = IDClassObject<Building.TrainDockingStation> & HasLocationWithRotation & {
  PowerInfo: PowerInfoObject;
  TransferRate: number;
  InflowRate: number;
  OutflowRate: number;
  LoadingMode: TrainLoadingMode;
  LoadingStatus: TrainLoadingStatus;
  DockingStatus: TrainDockingStatus;
  Inventory: InventoryItemObject[];
};

type TrainStationObject = IDClassObject<'FGTrainStationIdentifier'> & HasLocationWithRotation & {
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