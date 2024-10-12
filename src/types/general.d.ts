type GeometryType = 'Point';

type ClassObject<ClassName extends string = string> = {
  Name: string;
  ClassName: ClassName;
};

type IDClassObject<ClassName extends string = string> = ClassObject<ClassName> & {
  ID: number;
}

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

type FeaturesProperty<Type extends string = string, Name extends string = string> = {
  name: Name;
  type: Type;
};

type Features<Property, Geometry extends GeometryInformation = GeometryPoint> = {
  properties: Property;
  geometry: Geometry;
};

export type {
  IDClassObject,
  ClassObject,
  Features,
  FeaturesProperty,
  GeometryType,
  GeometryInformation,
  GeometryPoint,
  GeometryLine,
  Coordinates,
  CoordinatesWithRotation,
}