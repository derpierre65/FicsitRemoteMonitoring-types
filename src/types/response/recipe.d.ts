import type {ClassObject, IDClassObject, InventoryItemObject} from '../general';

type RecipeObject = IDClassObject & {
  Category: string; // TODO enum?
  Events: string[];
  Ingredients: (InventoryItemObject & {
    ManualRate: number;
    FactoryRate: number;
  })[];
  Products: (InventoryItemObject & {
    ManualRate: number;
    FactoryRate: number;
  })[];
  ProducedIn: string[];
  ManualDuration: number;
  FactoryDuration: number;
};

type SchematicsObject = IDClassObject & {
  TechTier: number;
  Type: string; // TODO enum
  Recipes: RecipeObject[];
  HasUnlocks: boolean;
  Locked: boolean;
  Purchased: boolean;
  DepLocked: boolean;
  LockedTutorial: boolean;
  LockedPhase: boolean;
  Tutorial: boolean;
};

type GetSchematicsResponse = SchematicsObject[];
type GetRecipesResponse = RecipeObject[];

export type {
  SchematicsObject,
  RecipeObject,
  GetSchematicsResponse,
  GetRecipesResponse,
}