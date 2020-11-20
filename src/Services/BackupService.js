import ApiService from './ApiService';

export default class BackupService {
  static createBackup() {
    return ApiService.post({ relativeUrl: '/api/cards' })
  }

  static purgeBackup() {
    return ApiService.delete({ relativeUrl: '/api/cards' })
  }

  static searchBackup(searchParams = {}) {
    return ApiService.get({ relativeUrl: '/api/cards', queryStringObj: searchParams })
  }
}
