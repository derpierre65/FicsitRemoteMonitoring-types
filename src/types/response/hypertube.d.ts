import type {HasLocationWIthRotation, PowerInfoObject} from '../general';

type HypertubeObject = HasLocationWIthRotation & {
  Name: string;
  PowerInfo: PowerInfoObject;
};

type GetHypertubeResponse = HypertubeObject[];

export type {
  HypertubeObject,
  GetHypertubeResponse,
}