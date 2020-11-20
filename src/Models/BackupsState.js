import { createDefaultLoadable } from './Loadable';

export function createDefaultBackupsState() {
  return {
    entities: [],
    createBackupLoadable: createDefaultLoadable(),
    purgeBackupLoadable: createDefaultLoadable(),
    searchBackupLoadable: createDefaultLoadable(),
  };
}
