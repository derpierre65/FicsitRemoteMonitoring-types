import {ClassAndName, CoordinatesWithRotation, FeatureProperty, GeometryPoint} from '../general';

type PowerSlugObject = ClassAndName & {
  ID: number;
  location: CoordinatesWithRotation;
  features: {
    properties: FeatureProperty<'', 'Power Slug'>,
    geometry: GeometryPoint;
  }
};

type GetPowerSlugResponse = PowerSlugObject[];

export type {
  GetPowerSlugResponse,
  PowerSlugObject,
}