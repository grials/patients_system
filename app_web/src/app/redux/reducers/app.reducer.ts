import { dataUser } from '../objects/dataUser.object';
import { startObject } from '../objects/start.object';

export class AppReducer {
  static ADD_PATIENT = 'ADD_PATIENT';
  static LOGIN = 'LOGIN';
  static TOKEN_INVALID = 'TOKEN_INVALID';
  static ALL_PATIENTS = 'ALL_PATIENTS';

  static workspaceReducer(state = startObject, action: any) {
    switch (action.type) {
      case AppReducer.ADD_PATIENT:
        return {
          ...state,
          dataPatient: {
            ...action.object,
          },
        };

      case AppReducer.ALL_PATIENTS:
        return {
          ...state,
          allPatients: [...action.object.data],
        };
      default:
        return state;
    }
  }

  static dataUserReducer(state = dataUser, action: any) {
    switch (action.type) {
      case AppReducer.LOGIN:
        return {
          ...state,
          ...action.object,
        };
      case AppReducer.TOKEN_INVALID:
        return {
          ...state,
          token: '',
        };
      default:
        return state;
    }
  }
}
