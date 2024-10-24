type ModListObject = {
  Name: string;
  SMRName: string;
  Version: string;
  Description: string;
  DocsURL: string;
  AcceptsAnyRemoteVersion: string;
  CreatedBy: string;
  RemoteVersionRange: string;
  RequiredOnRemote: boolean;
};

type GetModListResponse = ModListObject[];

export type {
  GetModListResponse,
  ModListObject,
};