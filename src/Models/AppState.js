import { createDefaultBackupsState } from './BackupsState';

export function createDefaultAppState() {
  return {
    backupsState: createDefaultBackupsState()
  };
}
