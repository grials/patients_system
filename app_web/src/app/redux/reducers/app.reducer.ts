import { dataUser } from '../objects/dataUser.object';
import { startObject } from '../objects/start.object';

export class AppReducer {
  static ADD_PATIENT = 'ADD_PATIENT';

  static workspaceReducer(state = startObject, action: any) {
    switch (action.type) {
      case AppReducer.ADD_PATIENT:
        return {
          ...state,
          dataPatient: {
            ...action.object,
          },
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
