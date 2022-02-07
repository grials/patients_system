import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
  public responseServe = { msg: '', error: false };

  constructor(private router: Router, private authService: AuthService) {}

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
          Validators.minLength(5),
          Validators.maxLength(30),
        ])
      ),
    });
  }

  msgServer() {
    return this.responseServe.msg;
  }

  isErrorServe() {
    return this.responseServe.error;
  }

  onSubmit() {
    this.authService
      .login(this.loginFormGroup.value)
      .subscribe((response: any) => {
        if (response?.error) {
          this.responseServe = { msg: response?.msg, error: response?.error };
        } else {
          this.responseServe = { msg: response?.msg, error: response?.error };
          this.router.navigateByUrl('/dashboard');
        }
      });
  }
}
