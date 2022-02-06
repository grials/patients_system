import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public firstname: string = '';
  public lastname: string = '';
  public age: number = 0;
  public gender: string = '';
  public pregnancy: boolean = false;
  public birthday: string = '';
  public phone: string = '';

  constructor() {}

  ngOnInit(): void {}
}
