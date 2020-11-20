import { call, put } from 'redux-saga/effects';

import {
  searchBackupSuccess,
  searchBackupError,
  createBackupSuccess,
  createBackupError,
  purgeBackupSuccess,
  purgeBackupError
} from '../Actions/backupsStateActions';
import BackupService from '../../Services/BackupService';

export function* onSearchBackup(action) {
  try {
    let response = yield call(BackupService.searchBackup);
    yield put(searchBackupSuccess(response));
  } catch (err) {
    yield put(searchBackupError(err));
  }
}

export function* onCreateBackup(action) {
  try {
    yield call(BackupService.createBackup);
    yield put(createBackupSuccess());
  } catch (err) {
    yield put(createBackupError(err));
  }
}

export function* onPurgeBackup(action) {
  try {
    yield call(BackupService.purgeBackup);
    yield put(purgeBackupSuccess());
  } catch (err) {
    yield put(purgeBackupError(err));
  }
}
