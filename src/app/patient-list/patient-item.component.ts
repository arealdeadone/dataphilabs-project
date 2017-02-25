import {Component, OnInit, Input} from '@angular/core';
import {Patient} from "../shared/patient";

@Component({
  selector: 'app-patient-item',
  templateUrl: './patient-item.component.html',
  styles: []
})
export class PatientItemComponent implements OnInit {

  constructor() { }
  @Input() patient: Patient;
  @Input() patientId: number;
  ngOnInit() {
  }

}
