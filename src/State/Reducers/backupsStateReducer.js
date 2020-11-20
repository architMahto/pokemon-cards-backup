import { createDefaultBackupsState } from '../../Models/BackupsState';

import {
  updateLoadableOnStart,
  updateLoadableOnSuccess,
  updateLoadableOnError,
} from '../../Models/Loadable';

import {
  SEARCH_BACKUP, SEARCH_BACKUP_SUCCESS, SEARCH_BACKUP_ERROR,
  CREATE_BACKUP, CREATE_BACKUP_SUCCESS, CREATE_BACKUP_ERROR,
  PURGE_BACKUP, PURGE_BACKUP_SUCCESS, PURGE_BACKUP_ERROR
} from '../Actions/backupsStateActions';

export default function backupsStateReducer(state = createDefaultBackupsState(), action) {
  switch (action.type) {
    case SEARCH_BACKUP:
      return {...state, searchBackupLoadable: updateLoadableOnStart()};

    case SEARCH_BACKUP_SUCCESS:
      return {
        ...state,
        entities: action.result['results'],
        searchBackupLoadable: updateLoadableOnSuccess()
      };

    case SEARCH_BACKUP_ERROR:
      return {...state, searchBackupLoadable: updateLoadableOnError(action.error)};

    case CREATE_BACKUP:
      return {...state, createBackupLoadable: updateLoadableOnStart()};

    case CREATE_BACKUP_SUCCESS:
      return {...state, createBackupLoadable: updateLoadableOnSuccess()};

    case CREATE_BACKUP_ERROR:
      return {...state, createBackupLoadable: updateLoadableOnError(action.error)};

    case PURGE_BACKUP:
      return {...state, purgeBackupLoadable: updateLoadableOnStart()};

    case PURGE_BACKUP_SUCCESS:
      return {...state, purgeBackupLoadable: updateLoadableOnSuccess()};

    case PURGE_BACKUP_ERROR:
      return {...state, purgeBackupLoadable: updateLoadableOnError(action.error)};

    default:
      return state;
  }
}
