import type {ClassObject} from '../general';
import type {ItemType} from '../../enums/item-type';

type ProdStatsData = ClassObject & {
  ProdPerMin: string;
  ProdPercent: number;
  ConsPercent: number;
  CurrentProd: number;
  MaxProd: number;
  CurrentConsumed: number;
  MaxConsumed: number;
  Type: ItemType;
};

type GetProdStatsResponse = ProdStatsData[];

export type {
  ProdStatsData,
  GetProdStatsResponse,
}