type SessionInfoObject = {
  SessionName: string;
  DayLength: number;
  NightLength: number;
  PassedDays: number;
  NumberOfDaysSinceLastDeath: number;
  Hours: number;
  Minutes: number;
  Seconds: number;
  IsDay: boolean;
  TotalPlayDuration: number;
  TotalPlayDurationText: string;
};

type GetSessionInfoResponse = SessionInfoObject;

export type {
  SessionInfoObject,
  GetSessionInfoResponse,
};