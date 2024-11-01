import type {
  Features,
  FeaturesProperty,
  HasLocationWithRotation,
  IDClassObject,
  InventoryItemObject
} from '../general';

type PlayerObject = IDClassObject<'Char_Player_C'> & HasLocationWithRotation & {
  Online: boolean;
  PlayerHP: number;
  Dead: boolean;
  Inventory: InventoryItemObject[];
  features: Features<FeaturesProperty<'Player'>>;
};

type GetPlayerResponse = PlayerObject[];

export type {
  GetPlayerResponse,
  PlayerObject,
}