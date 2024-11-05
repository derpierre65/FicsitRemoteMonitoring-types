import type {IDClassObject, Features, HasLocationWithRotation, InventoryItemObject} from '../general';

type StorageInvObject = IDClassObject & HasLocationWithRotation & {
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