import type {CoordinatesWithRotation, FeatureProperty, GeometryPoint, IDClassObject} from '../general';

type Player = IDClassObject & {
  location: CoordinatesWithRotation;
  PlayerHP: number;
  Dead: boolean;
  features: {
    properties: FeatureProperty<'Player'>;
    geometry: GeometryPoint;
  }
};

type GetPlayerResponse = Player[];

export type {
  GetPlayerResponse,
  Player,
}