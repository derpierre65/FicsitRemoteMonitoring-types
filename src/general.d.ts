type GeometryType = 'Point';

type ClassAndName = {
  Name: string;
  ClassName: string;
};

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
  ClassAndName,
  GeometryType,
  GeometryInformation,
  GeometryPoint,
  GeometryLine,
  Coordinates,
  CoordinatesWithRotation,
}