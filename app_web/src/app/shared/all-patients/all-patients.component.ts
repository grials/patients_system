import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.scss'],
})
export class AllPatientsComponent implements OnInit {
  public allPatienst = [];
  constructor(private servicePatients: PatientsService) {}

  ngOnInit(): void {
    this.servicePatients.allPatients().subscribe((response: any) => {
      this.allPatienst = response;
      console.log(this.allPatienst);
    });
  }

  getAllPatients(): any {
    return this.allPatienst;
  }
}
