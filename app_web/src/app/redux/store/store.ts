import { createStore, Store, applyMiddleware } from 'redux';
import { mainReducer } from '../reducers';
import { initialObject } from '../objects';
import { middleware } from '../middlewares';
import { observable, Observable } from 'rxjs';
import { AppAction } from '../actions/app.action';
import { AppService } from '../service/app.service';
import config from 'src/config';
import { UrlTree, Router } from '@angular/router';
import { IDataPatient, IDataUser } from 'src/app/interfaces/data.interfaces';

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

  static getAllPatients() {
    return this.getWorkspace()?.allPatients;
  }

  static getDataUser(): IDataUser {
    return StoreApp.getStore()?.dataUser;
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

  static allPatients() {
    const { port, urls, host } = config.API;
    const url = `http://${host}:${port}${urls.allPatients}`;

    const newState = new Observable((observable) => {
      try {
        AppService.get(url)
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              StoreApp.mainStore.dispatch(AppAction.allPatients(response.data));
              observable.next(StoreApp.getAllPatients());
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

  static login(data: any) {
    const { port, urls, host } = config.API;
    const url = `http://${host}:${port}${urls.login}`;

    const newState = new Observable((observable) => {
      try {
        AppService.post(url, data)
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              StoreApp.mainStore.dispatch(AppAction.login(response.data));
              observable.next(StoreApp.getDataUser());
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

  static verifiedToken(
    data: any,
    router: Router
  ): Observable<boolean | UrlTree> {
    const { port, urls, host } = config.API;
    const url = `http://${host}:${port}${urls.verifiedToken}`;

    const newState: Observable<boolean | UrlTree> = new Observable(
      (observable) => {
        try {
          AppService.post(url, data)
            .then((response) => {
              if (response.status >= 200 && response.status < 300) {
                if (response.data?.error) {
                  StoreApp.mainStore.dispatch(AppAction.tokenInvalid());
                } else {
                  StoreApp.mainStore.dispatch(
                    AppAction.login(response.data?.dataUser)
                  );
                }
                const result: any = !response.data.error
                  ? true
                  : router.navigateByUrl('/');

                observable.next(result);
                observable.complete();
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          observable.error(error);
        }
      }
    );

    return newState;
  }

  static addUser(data: any) {
    const { port, urls, host } = config.API;
    const url = `http://${host}:${port}${urls.addUser}`;

    const newState = new Observable((observable) => {
      try {
        AppService.post(url, data)
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              observable.next(response.data);
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
