type GeometryType = 'Point';

type Coordinates = {
  x: number;
  y: number;
  z: number;
};

type CoordinatesWithRotation = Coordinates & {
  rotation: number;
};

type GeometryPoint = {
  type: 'Point';
  coordinates: Coordinates;
};

type GeometryLine = {
  type: 'Line';
  coordinates: Coordinates[];
};

type GeometryInformation = GeometryPoint | GeometryLine;

export type {
  GeometryType,
  GeometryInformation,
  GeometryPoint,
  GeometryLine,
  Coordinates,
  CoordinatesWithRotation,
}