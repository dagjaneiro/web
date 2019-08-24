import { SFSingletonManager } from 'standard-file-js/lib/app/lib/singletonManager';

export class SingletonManager extends SFSingletonManager {
  // constructor needed for angularjs inejction to work
  // eslint-disable-next-line no-useless-constructor
  constructor(modelManager, syncManager) {
    super(modelManager, syncManager);
  }
}
