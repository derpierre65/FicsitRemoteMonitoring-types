import type {
  Features,
  FeaturesProperty,
  HasLocationWIthRotation,
  IDClassObject
} from '../general';

type PowerSlugObject = IDClassObject & HasLocationWIthRotation & {
  features: Features<FeaturesProperty<'Power Slug', ''>>
};

type GetPowerSlugResponse = PowerSlugObject[];

export type {
  GetPowerSlugResponse,
  PowerSlugObject,
}