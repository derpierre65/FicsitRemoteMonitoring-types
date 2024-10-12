type GeometryType = 'Point';

type GameCoordinates = {
  x: number;
  y: number;
  z: number;
};

type GameCoordinatesWithRotation = GameCoordinates & {
  rotation: number;
};

export type {
  GeometryType,
  GameCoordinates,
  GameCoordinatesWithRotation,
}