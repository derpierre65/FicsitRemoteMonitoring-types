import type {
  ClassObject,
  CoordinatesWithRotation,
  FeaturesProperty,
  Features,
  HasLocationWIthRotation
} from '../general';
import type {Building} from '../../enums/building';

type SwitchObject = ClassObject<Building.PowerSwitch | Building.PriorityPowerSwitch> & HasLocationWIthRotation & {
  SwitchTag: string;
  connected0: 0 | 1;
  connected1: 0 | 1;
  IsOn: boolean;
  Primary: number;
  Secondary: number;
  features: Features<FeaturesProperty<'Power Switch'>>
};

type GetSwitchesResponse = SwitchObject[];

export type {
  SwitchObject,
  GetSwitchesResponse,
};