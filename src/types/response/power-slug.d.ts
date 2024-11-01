import type {
  Features,
  FeaturesProperty,
  HasLocationWithRotation,
  IDClassObject
} from '../general';

type PowerSlugObject = IDClassObject & HasLocationWithRotation & {
  features: Features<FeaturesProperty<'Power Slug', ''>>
};

type GetPowerSlugResponse = PowerSlugObject[];

export type {
  GetPowerSlugResponse,
  PowerSlugObject,
}