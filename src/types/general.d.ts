type GeometryType = 'Point';

type ClassAndName<ClassName extends string = string> = {
  Name: string;
  ClassName: ClassName;
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

type FeatureProperty<Type extends string = string, Name extends string = string> = {
  name: Name;
  type: Type;
};

export type {
  ClassAndName,
  FeatureProperty,
  GeometryType,
  GeometryInformation,
  GeometryPoint,
  GeometryLine,
  Coordinates,
  CoordinatesWithRotation,
}