import type {
  ClassObject,
  FeaturesProperty,
  Features,
  HasLocationWithRotation, IDClassObject
} from '../general';
import type {Building} from '../../enums/building';

type SwitchObject = IDClassObject<Building.PowerSwitch | Building.PriorityPowerSwitch> & HasLocationWithRotation & {
  SwitchTag: string;
  connected0: 0 | 1;
  connected1: 0 | 1;
  IsOn: boolean;
  Primary: number;
  Secondary: number;
  Priority: number;
  features: Features<FeaturesProperty<'Power Switch' | 'Priority Power Switch'>>
};

type GetSwitchesResponse = SwitchObject[];

export type {
  SwitchObject,
  GetSwitchesResponse,
};