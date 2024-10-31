import type {
  ClassObject,
  Features,
  FeaturesProperty,
  HasLocationWIthRotation,
  InventoryItemObject
} from '../general';
import type {Building} from '../../enums/building';

type SpaceElevatorObject = ClassObject<Building.SpaceElevator> & HasLocationWIthRotation & {
  Inventory: []; // currently broken
  PhaseCost: InventoryItemObject[];
  FullyUpgraded: boolean;
  UpgradeReady: boolean;
  features: Features<FeaturesProperty<'Space Elevator', 'Space Elevator'>>
};

type GetSpaceElevatorResponse = SpaceElevatorObject[];

export {
  SpaceElevatorObject,
  GetSpaceElevatorResponse,
};