import type {ClassObject, Features, HasLocationWIthRotation, InventoryItemObject} from '../general';

type StorageInvObject = ClassObject & HasLocationWIthRotation & {
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