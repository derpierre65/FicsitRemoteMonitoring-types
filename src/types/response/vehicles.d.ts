import type {Features, HasLocationWithRotation, IDClassObject, InventoryItemObject, PowerInfoObject} from '../general';
import type {VehicleType} from '../../enums/vehicle';

type VehiclesObject<Type extends VehicleType = VehicleType> = IDClassObject<Type> & HasLocationWithRotation & {
  PathName: string;
  Status: string; // TODO enum
  CurrentGear: number;
  ForwardSpeed: number;
  EngineRPM: number;
  ThrottlePercent: number;
  Airborne: boolean;
  FollowingPath: boolean;
  Autopilot: boolean;
  Inventory: InventoryItemObject[];
  FuelInventory: InventoryItemObject[];
};

type TruckStationObject = IDClassObject & HasLocationWithRotation & {
  DockVehicleCount: number;
  LoadMode: string; // TODO enum
  TransferRate: number;
  MaxTransferRate: number;
  StationStatus: string; // TODO enum
  FuelRate: number;
  Inventory: InventoryItemObject[];
  FuelInventory: InventoryItemObject[];
  PowerInfo: PowerInfoObject;
  features: Features;
};

type GetTruckResponse = VehiclesObject<VehicleType.Truck>[];
type GetTractorResponse = VehiclesObject<VehicleType.Tractor>[];
type GetExplorerResponse = VehiclesObject<VehicleType.Explorer>[];
type GetFactoryCartResponse = VehiclesObject<VehicleType.FactoryCart>[];
type GetVehiclesResponse = VehiclesObject[];
type GetPathsResponse = unknown[]; // same response like getPipes
type GetTruckStationResponse = TruckStationObject[];

export type {
  VehiclesObject,
  TruckStationObject,
  GetTruckResponse,
  GetTractorResponse,
  GetExplorerResponse,
  GetFactoryCartResponse,
  GetVehiclesResponse,
  GetPathsResponse,
  GetTruckStationResponse,
}