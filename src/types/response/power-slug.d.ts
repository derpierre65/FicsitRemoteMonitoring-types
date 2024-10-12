import type {CoordinatesWithRotation, FeaturesProperty, GeometryPoint, IDClassObject} from '../general';

type PowerSlugObject = IDClassObject & {
  location: CoordinatesWithRotation;
  features: {
    properties: FeaturesProperty<'Power Slug', ''>,
    geometry: GeometryPoint;
  }
};

type GetPowerSlugResponse = PowerSlugObject[];

export type {
  GetPowerSlugResponse,
  PowerSlugObject,
}