import { SFSingletonManager } from 'standard-file-js';

export class SingletonManager extends SFSingletonManager {
  // constructor needed for angularjs injection to work
  // eslint-disable-next-line no-useless-constructor
  constructor(modelManager, syncManager) {
    super(modelManager, syncManager);
  }
}
