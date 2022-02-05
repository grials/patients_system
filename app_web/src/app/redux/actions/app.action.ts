import { AppReducer } from '../reducers/app.reducer';

export class AppAction {
  static newTask(task: any) {
    return {
      type: AppReducer.NEW_TASK,
      object: task,
    };
  }
}
