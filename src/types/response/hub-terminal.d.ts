import type {ClassObject, CoordinatesWithRotation, Features, FeaturesProperty} from '../general';
import type {Building} from '../../enums/building';

type HubTerminalObject = ClassObject<Building.Hub> & {
  location: CoordinatesWithRotation;
  ShipDock: boolean;
  SchNam: 'N/A' | string;
  ShipReturn: string;
  features: Features<FeaturesProperty>;
};

type GetHubTerminalResponse = HubTerminalObject[];

export type {
  HubTerminalObject,
  GetHubTerminalResponse,
}