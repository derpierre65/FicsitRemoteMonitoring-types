import type {CoordinatesWithRotation, Features, FeaturesProperty, IDClassObject} from '../general';

type PlayerObject = IDClassObject & {
  location: CoordinatesWithRotation;
  PlayerHP: number;
  Dead: boolean;
  features: Features<FeaturesProperty<'Player'>>;
};

type GetPlayerResponse = PlayerObject[];

export type {
  GetPlayerResponse,
  PlayerObject,
}