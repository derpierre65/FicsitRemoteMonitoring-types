import type {
  Features,
  HasLocationWithRotation,
  IDClassObject,
  InventoryItemObject
} from '../general';
import type {Building} from '../../enums/building';
import type {RecipeObject} from './recipe';

type HubTerminalActiveMilestoneObject = IDClassObject & {
  TechTier: number;
  Type: 'No Milestone Selected' | 'Milestone';
  Recipes: RecipeObject[];
  Cost: (InventoryItemObject & {
    RemainingCost: number;
    TotalCost: number;
  })[];
};

type HubTerminalObject = IDClassObject<Building.Hub> & HasLocationWithRotation & {
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