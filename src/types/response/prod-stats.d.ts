import type {ClassObject} from '../general';
import type {ItemType} from '../../enums/item-type';

type ProdStatsObject = ClassObject & {
  ProdPerMin: string;
  ProdPercent: number;
  ConsPercent: number;
  CurrentProd: number;
  MaxProd: number;
  CurrentConsumed: number;
  MaxConsumed: number;
  Type: ItemType;
};

type GetProdStatsResponse = ProdStatsObject[];

export type {
  ProdStatsObject,
  GetProdStatsResponse,
}