import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss'],
})
export class SinginComponent implements OnInit {
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
