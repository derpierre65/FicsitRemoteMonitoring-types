import type {HasLocationWIthRotation, IDClassObject, InventoryItemObject} from '../general';
import type {VehicleType} from '../../enums/vehicle';

type VehiclesObject<Type extends VehicleType = VehicleType> = IDClassObject<Type> & HasLocationWIthRotation & {
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

type GetTruckResponse = VehiclesObject<VehicleType.Truck>[];
type GetTractorResponse = VehiclesObject<VehicleType.Tractor>[];
type GetExplorerResponse = VehiclesObject<VehicleType.Explorer>[];
type GetFactoryCartResponse = VehiclesObject<VehicleType.FactoryCart>[];
type GetVehiclesResponse = VehiclesObject[];
type GetPathsResponse = unknown[]; // same response like getPipes

export type {
  VehiclesObject,
  GetTruckResponse,
  GetTractorResponse,
  GetExplorerResponse,
  GetFactoryCartResponse,
  GetVehiclesResponse,
  GetPathsResponse,
}