import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-singin-form',
  templateUrl: './singin-form.component.html',
  styleUrls: ['./singin-form.component.scss'],
})
export class SinginFormComponent implements OnInit {
  @HostListener('input', ['$event.target']) onchange(eventData: Event) {
    if (this.singinFormGroup.invalid) {
      this.disabledSubmitButton = true;
    } else {
      this.disabledSubmitButton = false;
    }
  }
  public singinFormGroup: FormGroup = new FormGroup({});
  public disabledSubmitButton: boolean = true;

  constructor(
    private patientsService: PatientsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.singinFormGroup = new FormGroup({
      name: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$'),
        ])
      ),
      lastname: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$'),
        ])
      ),
      age: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.min(18),
          Validators.max(130),
          Validators.pattern('^[0-9]+$'),
        ])
      ),
      gender: new FormControl('', Validators.compose([Validators.required])),
      pregnancy: new FormControl(
        false,
        Validators.compose([Validators.required])
      ),
      birthday: new FormControl('', Validators.compose([Validators.required])),
      phone: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]+$'),
        ])
      ),
    });
  }

  isMale() {
    if (this.singinFormGroup.get('gender')?.value === 'male') {
      return true;
    } else {
      return false;
    }
  }

  onSubmit() {
    const data = {
      ...this.singinFormGroup.value,
      birthday: moment(this.singinFormGroup.get('birthday')?.value).format(
        'DD/MM/YYYY'
      ),
      age: parseInt(this.singinFormGroup.get('age')?.value),
    };

    this.patientsService.addPatient(data).subscribe((response: any) => {
      if (!response?.error) {
        this.router.navigateByUrl('suscess');
      } else {
        this.singinFormGroup.reset();
      }
    });

    this.disabledSubmitButton = true;
  }
}
