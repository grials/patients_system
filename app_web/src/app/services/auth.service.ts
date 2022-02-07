import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import StoreApp from '../redux';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(data: any) {
    return StoreApp.login(data);
  }

  verifiedToken(token: string, router: Router) {
    return StoreApp.verifiedToken({ token }, router);
  }

  addUser() {}
}
