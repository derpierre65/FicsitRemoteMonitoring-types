import type {
  ClassObject,
  Features,
  FeaturesProperty,
  HasLocationWIthRotation
} from '../general';
import type {Building} from '../../enums/building';

type HubTerminalObject = ClassObject<Building.Hub> & HasLocationWIthRotation & {
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