import { Component, OnInit } from '@angular/core';
import { IDataPatient } from 'src/app/interfaces/data.interfaces';
import { StoreApp } from './../../redux/store/store';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  public dataPatient: IDataPatient;

  constructor() {
    this.dataPatient = StoreApp.getDataPatient();
    console.log(this.dataPatient);
  }

  ngOnInit(): void {}

  isPregnant() {
    if (this.dataPatient?.pregnancy) {
      return 'Si';
    } else {
      return 'No';
    }
  }

  getFullName() {
    return `${this.dataPatient?.name} ${this.dataPatient?.lastname}`;
  }

  getName() {
    return this.dataPatient?.name;
  }

  getLastname() {
    return this.dataPatient?.lastname;
  }

  getAge() {
    return this.dataPatient?.age;
  }

  getBirthday() {
    return this.dataPatient?.birthday;
  }

  getPhone() {
    return this.dataPatient?.phone;
  }

  getGender() {
    switch (this.dataPatient?.gender) {
      case 'male':
        return 'Hombre';

      case 'famenine':
        return 'Mujer';

      default:
        return 'NO DEFINIDO';
    }
  }

  isWomen() {
    switch (this.dataPatient?.gender) {
      case 'male':
        return false;

      case 'famenine':
        return true;

      default:
        return false;
    }
  }
}
