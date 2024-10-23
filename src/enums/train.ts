enum TrainDockingStatus {
  Complete = 'Complete',
  IdleWaitForTime = 'Idle Wait For Time',
  Loading = 'Loading',
  None = 'None',
  Unloading = 'UNloading',
  WaitForTransferCondition = 'Wait for Transfer Condition',
  WaitingForTransfer = 'Waiting For Transfer',
  WaitingToStart = 'Waiting To Start',
}

enum TrainLoadingMode {
  Unloading = 'Unloading',
  Loading = 'Unloading',
}

enum TrainLoadingStatus {
  Idle = 'Idle',
  Unloading = 'Unloading',
  Loading = 'Unloading',
}

export {
  TrainDockingStatus,
  TrainLoadingMode,
  TrainLoadingStatus,
};