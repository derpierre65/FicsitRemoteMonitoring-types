import type {
  ClassObject,
  Features,
  FeaturesProperty,
  HasLocationWIthRotation
} from '../general';
import type {Building} from '../../enums/building';

type FactoryType = Building.Refinery
  | Building.Constructor
  | Building.Smelter
  | Building.Blender
  | Building.Manufacturer
  | Building.Assembler
  | Building.ParticleAccelerator
  | Building.Foundry;

type FactoryObject<Type extends FactoryType = FactoryType> = ClassObject<Type> & HasLocationWIthRotation & {
  production: FactoryProductionObject[];
  Recipe: string;
  RecipeClassName: string; // Recipe_..._C
  ingredients: FactoryIngredientObject[];
  ManuSpeed: number;
  IsConfigured: boolean;
  IsProducing: boolean;
  IsPaused: boolean;
  PowerInfo: FactoryPowerInfoObject[];
  CircuitID: number;
  features: Features<FeaturesProperty>
};

type FactoryIngredientObject = ClassObject & {
  Amount: number;
  CurrentConsumed: number;
  MaxConsumed: number;
  ConsPercent: number;
};

type FactoryProductionObject = ClassObject & {
  Amount: number;
  CurrentProd: number;
  MaxProd: number;
  ProdPercent: number;
};

type FactoryPowerInfoObject = {
  CircuitID: number;
  PowerConsumed: number;
};

type GetFactoryResponse = FactoryObject[];
type GetSmelterResponse = FactoryObject<Building.Smelter>[];
type GetConstructorResponse = FactoryObject<Building.Constructor>[];
type GetAssemblerResponse = FactoryObject<Building.Assembler>[];
type GetFoundryResponse = FactoryObject<Building.Foundry>[];
type GetManufacturerResponse = FactoryObject<Building.Manufacturer>[];
type GetRefineryResponse = FactoryObject<Building.Refinery>[];
type GetBlenderResponse = FactoryObject<Building.Blender>[];
type GetParticleResponse = FactoryObject<Building.ParticleAccelerator>[];

export type {
  FactoryType,
  FactoryObject,
  FactoryIngredientObject,
  FactoryProductionObject,
  FactoryPowerInfoObject,
  GetFactoryResponse,
  GetSmelterResponse,
  GetConstructorResponse,
  GetAssemblerResponse,
  GetFoundryResponse,
  GetManufacturerResponse,
  GetRefineryResponse,
  GetBlenderResponse,
  GetParticleResponse,
}