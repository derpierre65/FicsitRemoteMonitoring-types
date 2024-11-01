import type {
  ClassObject,
  Features,
  HasLocationWIthRotation, InventoryItemObject
} from '../general';
import type {Building} from '../../enums/building';

type HubTerminalActiveMilestoneObject = ClassObject & {
  TechTier: number;
  Type: 'No Milestone Selected' | 'Milestone';
  Recipes: unknown[];
  Cost: (InventoryItemObject & {
    RemainingCost: number;
    TotalCost: number;
  })[];
};

type HubTerminalObject = ClassObject<Building.Hub> & HasLocationWIthRotation & {
  ActiveMilestone: HubTerminalActiveMilestoneObject;
  ShipDock: boolean;
  SchNam: 'N/A' | string;
  ShipReturn: string;
  features: Features;
};

type GetHubTerminalResponse = HubTerminalObject[];

export type {
  HubTerminalActiveMilestoneObject,
  HubTerminalObject,
  GetHubTerminalResponse,
}