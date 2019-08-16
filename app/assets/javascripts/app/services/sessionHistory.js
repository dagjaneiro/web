import { NoteHistoryEntry } from '../models/noteHistoryEntry';

export class SessionHistory extends SFSessionHistoryManager {
  constructor(
    modelManager,
    storageManager,
    authManager,
    passcodeManager,
    $timeout
  ) {
    SFItemHistory.HistoryEntryClassMapping = {
      Note: NoteHistoryEntry
    };

    // Session History can be encrypted with passcode keys. If it changes, we need to resave session
    // history with the new keys.
    passcodeManager.addPasscodeChangeObserver(() => {
      this.saveToDisk();
    });

    var keyRequestHandler = async () => {
      const offline = authManager.offline();
      const auth_params = offline
        ? passcodeManager.passcodeAuthParams()
        : await authManager.getAuthParams();
      const keys = offline ? passcodeManager.keys() : await authManager.keys();

      return {
        keys: keys,
        offline: offline,
        auth_params: auth_params
      };
    };

    var contentTypes = ['Note'];
    super(
      modelManager,
      storageManager,
      keyRequestHandler,
      contentTypes,
      $timeout
    );
  }
}
