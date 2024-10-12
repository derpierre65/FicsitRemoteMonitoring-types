import type {CoordinatesWithRotation, Features, FeaturesProperty, IDClassObject} from '../general';

type PowerSlugObject = IDClassObject & {
  location: CoordinatesWithRotation;
  features: Features<FeaturesProperty<'Power Slug', ''>>
};

type GetPowerSlugResponse = PowerSlugObject[];

export type {
  GetPowerSlugResponse,
  PowerSlugObject,
}