import config from '../config';
import { AppReducer } from '../reducers/app.reducer';

export class AppAction {
  static addPatient(data: any) {
    return {
      type: AppReducer.ADD_PATIENT,
      object: data,
    };
  }

  static login(data: any) {
    localStorage.setItem(config.keysLocalStorage.token, data?.token);
    return {
      type: AppReducer.LOGIN,
      object: data,
    };
  }

  static tokenInvalid() {
    localStorage.removeItem(config.keysLocalStorage.token);
    return {
      type: AppReducer.TOKEN_INVALID,
    };
  }

  static allPatients(data: any) {
    return {
      type: AppReducer.ALL_PATIENTS,
      object: data,
    };
  }
}
