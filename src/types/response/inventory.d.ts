import type {ClassObject, Features, HasLocationWithRotation, InventoryItemObject} from '../general';

type StorageInvObject = ClassObject & HasLocationWithRotation & {
  Inventory: InventoryItemObject[];
  features: Features;
};

type GetStorageInvResponse = StorageInvObject[];
type GetCloudInvResponse = InventoryItemObject[];
type GetWorldInvResponse = InventoryItemObject[];

export type {
  StorageInvObject,
  GetStorageInvResponse,
  GetCloudInvResponse,
  GetWorldInvResponse,
}