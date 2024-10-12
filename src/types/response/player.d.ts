import type {CoordinatesWithRotation, Features, FeaturesProperty, IDClassObject} from '../general';

type Player = IDClassObject & {
  location: CoordinatesWithRotation;
  PlayerHP: number;
  Dead: boolean;
  features: Features<FeaturesProperty<'Player'>>;
};

type GetPlayerResponse = Player[];

export type {
  GetPlayerResponse,
  Player,
}