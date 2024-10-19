type PowerObject = {
  CircuitID: number;
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
  FuseTriggered: boolean;
};

type GetPowerResponse = PowerObject[];

export type {
  PowerObject,
  GetPowerResponse,
};
