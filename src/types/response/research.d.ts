import type {ClassObject, InventoryItemObject} from '../general';

type ResearchCoordinate = {
  x: number;
  y: number;
};

type ResearchTreesObject = {
  Name: string;
  Nodes: ClassObject & {
    Description: string;
    Category: string;
    State: string;
    TechTier: number;
    TimeToComplete: number;
    Cost: InventoryItemObject[];
    UnhiddenBy: ResearchCoordinate[];
    Parents: ResearchCoordinate[];
    Coordinates: ResearchCoordinate;
  }[];
};

type GetResearchTreesResponse = ResearchTreesObject[];

export type {
  ResearchCoordinate,
  ResearchTreesObject,
  GetResearchTreesResponse,
}