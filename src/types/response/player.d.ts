import type {ClassObject, CoordinatesWithRotation, FeatureProperty, GeometryPoint} from '../general';

type Player = ClassObject & {
  ID: number;
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