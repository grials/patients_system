import { Injectable } from '@angular/core';
import StoreApp from '../redux';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  constructor() {}

  addPatient(data: any) {
    return StoreApp.addPatient(data);
  }

  allPatients() {
    return StoreApp.allPatients();
  }
}
