import type {ClassObject, CoordinatesWithRotation, FeatureProperty, GeometryPoint} from '../general';

type PowerSlugObject = ClassObject & {
  ID: number;
  location: CoordinatesWithRotation;
  features: {
    properties: FeatureProperty<'Power Slug', ''>,
    geometry: GeometryPoint;
  }
};

type GetPowerSlugResponse = PowerSlugObject[];

export type {
  GetPowerSlugResponse,
  PowerSlugObject,
}