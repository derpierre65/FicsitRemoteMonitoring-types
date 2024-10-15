import type {ClassObject, CoordinatesWithRotation, Features, FeaturesProperty} from '../general';
import type {Building} from '../../enums/building';

type HubTerminalData = ClassObject<Building.Hub> & {
  location: CoordinatesWithRotation;
  ShipDock: boolean;
  SchNam: 'N/A' | string;
  ShipReturn: string;
  features: Features<FeaturesProperty>;
};

type GetHubTerminalResponse = HubTerminalData[];

export type {
  HubTerminalData,
  GetHubTerminalResponse,
}