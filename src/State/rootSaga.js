import { all, takeLatest } from 'redux-saga/effects';

import {
  SEARCH_BACKUP, CREATE_BACKUP, PURGE_BACKUP
} from './Actions/backupsStateActions';

import {
  onSearchBackup, onCreateBackup, onPurgeBackup
} from './Sagas/backupsStateSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(SEARCH_BACKUP, onSearchBackup),
    takeLatest(CREATE_BACKUP, onCreateBackup),
    takeLatest(PURGE_BACKUP, onPurgeBackup)
  ]);
}
