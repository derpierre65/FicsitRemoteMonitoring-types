type ClassObject<ClassName extends string = string> = {
  Name: string;
  ClassName: ClassName;
};

type IDClassObject<ClassName extends string = string> = ClassObject<ClassName> & {
  ID: number;
}

type InventoryItemObject = ClassObject & {
  Amount: number;
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

type FeaturesProperty<Type extends string = string, Name extends string = string> = {
  name: Name;
  type: Type;
};

type Features<Property = FeaturesProperty, Geometry extends GeometryInformation = GeometryPoint> = {
  properties: Property;
  geometry: Geometry;
};

type PowerInfoObject = {
  CircuitGroupID: number;
  CircuitID: number;
  PowerConsumed: number;
  MaxPowerConsumed: number;
};

type HasLocationWIthRotation = {
  location: CoordinatesWithRotation;
};

type HasLocation = {
  location: Coordinates;
};

export type {
  ClassObject,
  IDClassObject,
  InventoryItemObject,
  PowerInfoObject,
  Features,
  FeaturesProperty,
  GeometryInformation,
  GeometryPoint,
  GeometryLine,
  Coordinates,
  CoordinatesWithRotation,
  HasLocationWIthRotation,
  HasLocation,
}