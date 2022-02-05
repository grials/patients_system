import { createStore, Store, applyMiddleware } from 'redux';
import { mainReducer } from '../reducers';
import { initialObject } from '../objects';
import { middleware } from '../middlewares';
import { observable, Observable } from 'rxjs';
import { AppAction } from '../actions/app.action';
import { AppService } from '../service/app.service';

export class StoreApp {
  static mainStore: Store;

  static startStore() {
    StoreApp.mainStore = createStore(
      mainReducer,
      initialObject,
      applyMiddleware(...middleware)
    );
  }

  static getStore() {
    return StoreApp.mainStore.getState();
  }

  static setTask(task: any) {
    const newState = new Observable((observable) => {
      try {
        StoreApp.mainStore.dispatch(AppAction.newTask(task));
        observable.next(StoreApp.getStore()?.workspace);
        observable.complete();
      } catch (error) {
        observable.error(error);
      }
    });

    return newState;
  }

  static prueba() {
    const newObservable = new Observable((observable) => {
      try {
        AppService.getData()
          .then((data) => {
            observable.next(data);
            observable.complete();
          })
          .catch((err) => {
            throw new Error(err);
          });
      } catch (error) {
        observable.error(error);
      }
    });

    return newObservable;
  }
}
