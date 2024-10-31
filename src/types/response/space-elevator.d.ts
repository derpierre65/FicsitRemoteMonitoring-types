import type {
  ClassObject,
  Features,
  FeaturesProperty,
  HasLocationWIthRotation,
  InventoryItemObject
} from '../general';
import type {Building} from '../../enums/building';

type SpaceElevatorPhaseItem = InventoryItemObject & {
  RemainingCost: number;
  TotalCost: number;
};

type SpaceElevatorObject = ClassObject<Building.SpaceElevator> & HasLocationWIthRotation & {
  CurrentPhase: InventoryItemObject[];
  FullyUpgraded: boolean;
  UpgradeReady: boolean;
  features: Features<FeaturesProperty<'Space Elevator', 'Space Elevator'>>
};

type GetSpaceElevatorResponse = SpaceElevatorObject[];

export {
  SpaceElevatorObject,
  SpaceElevatorPhaseItem,
  GetSpaceElevatorResponse,
};