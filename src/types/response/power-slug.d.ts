import type {CoordinatesWithRotation, FeatureProperty, GeometryPoint, IDClassObject} from '../general';

type PowerSlugObject = IDClassObject & {
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