import type {ClassAndName, CoordinatesWithRotation, GeometryPoint} from '../general';

type Player = ClassAndName & {
  ID: number;
  location: CoordinatesWithRotation;
  PlayerHP: number;
  Dead: boolean;
  features: {
    properties: {
      name: string;
      type: 'Player';
    };
    geometry: GeometryPoint;
  }
};

type GetPlayerResponse = Player[];

export type {
  GetPlayerResponse,
  Player,
}