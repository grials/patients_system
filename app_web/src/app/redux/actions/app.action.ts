import { AppReducer } from '../reducers/app.reducer';

export class AppAction {
  static addPatient(data: any) {
    return {
      type: AppReducer.ADD_PATIENT,
      object: data,
    };
  }
}
