import type {HasLocationWithRotation, IDClassObject, PowerInfoObject} from '../general';

type PowerObject = {
  CircuitGroupID: number;
  PowerProduction: number;
  PowerConsumed: number;
  PowerCapacity: number;
  PowerMaxConsumed: number;
  BatteryInput: number;
  BatteryOutput: number;
  BatteryDifferential: number;
  BatteryPercent: number;
  BatteryCapacity: number;
  BatteryTimeEmpty: string;
  BatteryTimeFull: string;
  AssociatedCircuits: number[];
  FuseTriggered: boolean;
};

type PowerUsageObject = IDClassObject & HasLocationWithRotation & {
  PowerInfo: PowerInfoObject;
};

type GetPowerUsageResponse = PowerUsageObject[];
type GetPowerResponse = PowerObject[];

export type {
  PowerObject,
  PowerUsageObject,
  GetPowerUsageResponse,
  GetPowerResponse,
};
