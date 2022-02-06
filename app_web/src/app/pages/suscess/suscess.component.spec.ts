import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscessComponent } from './suscess.component';

describe('SuscessComponent', () => {
  let component: SuscessComponent;
  let fixture: ComponentFixture<SuscessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
