export const SEARCH_BACKUP = 'SEARCH_BACKUP';
export const SEARCH_BACKUP_SUCCESS = 'SEARCH_BACKUP_SUCCESS';
export const SEARCH_BACKUP_ERROR = 'SEARCH_BACKUP_ERROR';

export const CREATE_BACKUP = 'CREATE_BACKUP';
export const CREATE_BACKUP_SUCCESS = 'CREATE_BACKUP_SUCCESS';
export const CREATE_BACKUP_ERROR = 'CREATE_BACKUP_ERROR';

export const PURGE_BACKUP = 'PURGE_BACKUP';
export const PURGE_BACKUP_SUCCESS = 'PURGE_BACKUP_SUCCESS';
export const PURGE_BACKUP_ERROR = 'PURGE_BACKUP_ERROR';

export const searchBackup = (searchParams = {}) => {
  return {
    type: SEARCH_BACKUP, searchParams
  };
}

export const searchBackupSuccess = (result) => {
  return {
    type: SEARCH_BACKUP_SUCCESS, result
  };
}

export const searchBackupError = (error) => {
  return {
    type: SEARCH_BACKUP_ERROR, error
  };
}

export const createBackup = () => {
  return {
    type: CREATE_BACKUP,
  };
}

export const createBackupSuccess = (result) => {
  return {
    type: CREATE_BACKUP_SUCCESS, result
  };
}

export const createBackupError = (error) => {
  return {
    type: CREATE_BACKUP_ERROR, error
  };
}

export const purgeBackup = () => {
  return {
    type: PURGE_BACKUP
  };
}

export const purgeBackupSuccess = (result) => {
  return {
    type: PURGE_BACKUP_SUCCESS, result
  };
}

export const purgeBackupError = (error) => {
  return {
    type: PURGE_BACKUP_ERROR, error
  };
}
