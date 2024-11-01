import type {
  ClassObject,
  Features,
  FeaturesProperty,
  HasLocationWIthRotation,
  InventoryItemObject
} from '../general';
import type {Building} from '../../enums/building';
import type {ResourceNodeObject} from './resource-node';

type TowerObject = ClassObject<Building.RadarTower> & HasLocationWIthRotation & {
  RevealRadius: number;
  RevealType: 'FOWRT_StaticNoGradient';
  Fauna: InventoryItemObject[];
  Signal: InventoryItemObject[];
  Flora: InventoryItemObject[];
  ScannedResourceNodes: Omit<ResourceNodeObject, 'features'>[];
  features: Features<FeaturesProperty<'Radar Tower', 'Radar Tower'>>;
};

type GetRadarTowerResponse = TowerObject[];

export type {
  TowerObject,
  GetRadarTowerResponse,
}