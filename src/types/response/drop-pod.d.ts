import type {Features, FeaturesProperty, HasLocationWIthRotation} from '../general';

type DropPodObject = HasLocationWIthRotation & {
  ID: string;
  Opened: boolean;
  Looted: boolean;
  RepairItem: string;
  RepairItemClass: string;
  RepairAmount: number;
  PowerRequired: number;
  features: Features<FeaturesProperty<'Drop Pod', 'Drop Pod'>>;
};

type GetDropPodResponse = DropPodObject[];

export type {
  DropPodObject,
  GetDropPodResponse,
}