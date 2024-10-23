import type {ClassObject, CoordinatesWithRotation, Features, FeaturesProperty, InventoryItemObject} from '../general';
import type {Building} from '../../enums/building';

type TowerObject = ClassObject<Building.RadarTower> & {
  location: CoordinatesWithRotation;
  RevealRadius: number;
  RevealType: 'FOWRT_StaticNoGradient';
  Fauna: InventoryItemObject[];
  Signal: InventoryItemObject[];
  Flora: InventoryItemObject[];
  features: Features<FeaturesProperty<'Radar Tower', 'Radar Tower'>>;
};

type GetRadarTowerResponse = TowerObject[];

export type {
  TowerObject,
  GetRadarTowerResponse,
}