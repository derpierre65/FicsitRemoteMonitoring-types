import type {ClassObject, CoordinatesWithRotation, Features, FeaturesProperty, InventoryItemObject} from '../general';
import {TrainDockingStatus, type TrainLoadingMode, TrainLoadingStatus} from '../../enums/train';
import {Building} from '../../enums/building';

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

type TrainStationCargoInventoryObject = ClassObject<Building.TrainDockingStation> & {
  location: CoordinatesWithRotation;
  PowerConsumption: number;
  TransferRate: number;
  InflowRate: number;
  OutflowRate: number;
  LoadingMode: TrainLoadingMode;
  LoadingStatus: TrainLoadingStatus;
  DockingStatus: TrainDockingStatus;
  Inventory: InventoryItemObject[];
};

type TrainStationObject = ClassObject<'FGTrainStationIdentifier'> & {
  location: CoordinatesWithRotation;
  PowerConsumption: number;
  TransferRate: number;
  InflowRate: number;
  OutflowRate: number;
  CargoInventory: TrainStationCargoInventoryObject[];
  CircuitID: number;
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