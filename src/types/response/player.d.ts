import type {CoordinatesWithRotation, Features, FeaturesProperty, IDClassObject} from '../general';

type PlayerObject = IDClassObject<'Char_Player_C'> & {
  location: CoordinatesWithRotation;
  Online: boolean;
  PlayerHP: number;
  Dead: boolean;
  features: Features<FeaturesProperty<'Player'>>;
};

type GetPlayerResponse = PlayerObject[];

export type {
  GetPlayerResponse,
  PlayerObject,
}