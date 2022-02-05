import { dataUser } from '../objects/dataUser.object';
import { startObject } from '../objects/start.object';

export class AppReducer {
  static NEW_TASK = 'NEW_TASK';

  static workspaceReducer(state = startObject, action: any) {
    switch (action.type) {
      case AppReducer.NEW_TASK:
        console.log('reducer >>>>', action.object);
        return {
          ...startObject,
          task: [...state.task, action.object],
        };

      default:
        return state;
    }
  }

  static dataUserReducer(state = dataUser, action: any) {
    switch (action.type) {
      default:
        return state;
    }
  }
}
