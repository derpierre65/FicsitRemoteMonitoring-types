import type {Features, FeaturesProperty, HasLocationWithRotation, IDClassObject, PowerInfoObject} from '../general';

type DroneObject = IDClassObject & HasLocationWithRotation & {
  HomeStation: string;
  PairedStation: string;
  CurrentDestination: string;
  FlyingSpeed: number;
  CurrentFlyingMode: string;
  features: Features<FeaturesProperty<'Drone', 'Drone'>>;
};

type DroneStationObject = IDClassObject & HasLocationWithRotation & {
  InputInventory: unknown[];
  OutputInventory: InventoryItemObject[];
  FuelInventory: InventoryItemObject[];
  PairedStation: string;
  DroneStatus: string;
  AvgIncRate: number;
  AvgIncStack: number;
  AvgOutRate: number;
  AvgOutStack: number;
  AvgRndTrip: string;
  AvgTotalIncRate: number;
  AvgTotalIncStack: number;
  AvgTotalOutRate: number;
  AvgTotalOutStack: number;
  AvgTripIncAmt: number;
  AvgTripOutAmt: number;
  EstTotalTransRate: number;
  EstLatestTotalIncStack: number;
  EstLatestTotalOutStack: number;
  LatestIncStack: number;
  LatestOutStack: number;
  LatestRndTrip: number;
  LatestTripIncAmt: number;
  LatestTripOutAmt: number;
  MedianRndTrip: string;
  MedianTripIncAmt: number;
  MedianTripOutAmt: number;
  ActiveFuel: {
    FuelName: string;
    SingleTripFuelCost: number;
    EstimatedTransportRate: number;
    EstimatedRoundTripTime: number;
    EstimatedFuelCostRate: number;
  };
  FuelInfo: {
    FuelName: string;
    SingleTripFuelCost: number;
    EstimatedTransportRate: number;
    EstimatedRoundTripTime: number;
    EstimatedFuelCostRate: number;
  }[];
  PowerInfo: PowerInfoObject;
  features: Features<FeaturesProperty<"Drone Port", "Drone Station">>;
};

type GetDroneStationResponse = DroneStationObject[];
type GetDroneResponse = DroneObject[];

export type {
  DroneObject,
  GetDroneResponse,
  DroneStationObject,
  GetDroneStationResponse,
}