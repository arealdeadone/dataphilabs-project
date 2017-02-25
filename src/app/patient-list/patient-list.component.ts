import {Component, OnInit, OnChanges} from '@angular/core';
import {Patient} from "../shared/patient";
import {PatientService} from "../patient.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {PatientSearchService} from "../patient-search.service";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit{
  searched = false;
  constructor(private patientService: PatientService,
              private router: Router,
              private patientSearch: PatientSearchService) { }
  patients: Patient[] = [];
  ngOnInit() {
      this.patients = this.patientService.staticPatients();

      if(this.patients == null || this.patientService.getisPatientAdded())
        this.patientService.getPatients();
      this.patientService.patientsChanged.subscribe(
        (patients: Patient[]) => {
          this.patients = patients;
        }
      );
  }

  search(f: NgForm){
    //debugger;
    this.patientSearch.searchPatient(f.value.searchText);
    this.patientService.patientsChanged.subscribe(
      (patients: Patient[]) => {
        this.patients = patients;
      }
    );
    this.searched = true;
  }

  resetSearch(){
    this.patientService.reEmitstaticPatients();
    this.patientService.patientsChanged.subscribe(
      (patients: Patient[]) => this.patients = patients
    );
    this.searched = false;
    this.patientSearch.didSearch = false;
    this.router.navigate(['../view']);
  }

}
