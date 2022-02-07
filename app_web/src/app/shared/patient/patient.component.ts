import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  @Input('name') name: string = '';
  @Input('lastname') lastname: string = '';
  @Input('age') age: number = 0;
  @Input('birthday') birthday: string = '';
  @Input('gender') gender: string = '';
  @Input('pregnancy') pregnancy: boolean = false;
  @Input('phone') phone: string = '';

  constructor() {}

  ngOnInit(): void {}

  isPregnant() {
    if (this.pregnancy) {
      return 'Si';
    } else {
      return 'No';
    }
  }

  getFullName() {
    return `${this.name} ${this.lastname}`;
  }

  getName() {
    return this.name;
  }

  getLastname() {
    return this.lastname;
  }

  getAge() {
    return this.age;
  }

  getBirthday() {
    return this.birthday;
  }

  getPhone() {
    return this.phone;
  }

  getGender() {
    switch (this.gender) {
      case 'male':
        return 'Hombre';

      case 'famenine':
        return 'Mujer';

      default:
        return 'NO DEFINIDO';
    }
  }

  isWomen() {
    switch (this.gender) {
      case 'male':
        return false;

      case 'famenine':
        return true;

      default:
        return false;
    }
  }
}
