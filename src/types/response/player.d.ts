import type {CoordinatesWithRotation, FeaturesProperty, GeometryPoint, IDClassObject} from '../general';

type Player = IDClassObject & {
  location: CoordinatesWithRotation;
  PlayerHP: number;
  Dead: boolean;
  features: {
    properties: FeaturesProperty<'Player'>;
    geometry: GeometryPoint;
  }
};

type GetPlayerResponse = Player[];

export type {
  GetPlayerResponse,
  Player,
}