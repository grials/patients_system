import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @HostListener('input', ['$event.target']) onchange(eventData: Event) {
    if (this.loginFormGroup.invalid) {
      this.disabledSubmitButton = true;
    } else {
      this.disabledSubmitButton = false;
    }
  }
  public loginFormGroup: FormGroup = new FormGroup({});
  public disabledSubmitButton: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      username: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$'),
        ])
      ),
    });
  }
}
