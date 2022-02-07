import { createStore, Store, applyMiddleware } from 'redux';
import { mainReducer } from '../reducers';
import { initialObject } from '../objects';
import { middleware } from '../middlewares';
import { observable, Observable } from 'rxjs';
import { AppAction } from '../actions/app.action';
import { AppService } from '../service/app.service';
import config from 'src/config';
import { IDataPatient } from 'src/app/interfaces/data.interfaces';

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

  static getWorkspace() {
    return StoreApp.getStore()?.workspace;
  }

  static getDataPatient(): IDataPatient {
    return StoreApp.getWorkspace()?.dataPatient;
  }

  static addPatient(data: any) {
    const { port, urls, host } = config.API;
    const url = `http://${host}:${port}${urls.addPatient}`;

    const newState = new Observable((observable) => {
      try {
        AppService.post(url, data)
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              StoreApp.mainStore.dispatch(AppAction.addPatient(response.data));
              observable.next(StoreApp.getDataPatient());
              observable.complete();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        observable.error(error);
      }
    });

    return newState;
  }
}
