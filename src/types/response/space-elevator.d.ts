import type {
  ClassObject,
  Features,
  FeaturesProperty,
  HasLocationWithRotation,
  InventoryItemObject
} from '../general';
import type {Building} from '../../enums/building';

type SpaceElevatorPhaseItemObject = InventoryItemObject & {
  RemainingCost: number;
  TotalCost: number;
};

type SpaceElevatorObject = ClassObject<Building.SpaceElevator> & HasLocationWithRotation & {
  CurrentPhase: InventoryItemObject[];
  FullyUpgraded: boolean;
  UpgradeReady: boolean;
  features: Features<FeaturesProperty<'Space Elevator', 'Space Elevator'>>
};

type GetSpaceElevatorResponse = SpaceElevatorObject[];

export {
  SpaceElevatorPhaseItemObject,
  SpaceElevatorObject,
  GetSpaceElevatorResponse,
};