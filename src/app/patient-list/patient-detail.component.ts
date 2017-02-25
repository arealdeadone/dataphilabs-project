import {Component, OnInit, OnDestroy} from '@angular/core';
import {PatientService} from "../patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Patient} from "../shared/patient";
import {PatientSearchService} from "../patient-search.service";

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styles: []
})
export class PatientDetailComponent implements OnInit, OnDestroy {

  private subscription:Subscription;
  private patientIndex: number;
  selectedPatient: Patient;
  private searched;

  constructor(private patientService: PatientService,
              private route: ActivatedRoute,
              private router: Router,
              private patientSearch: PatientSearchService) {
    this.searched = this.patientSearch.didSearch;
  }

  ngOnInit() {

    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.patientIndex = params['id'];
        if(this.searched)
          this.selectedPatient = this.patientSearch.getPatient(this.patientIndex);
        else
          this.selectedPatient = this.patientService.getPatient(this.patientIndex);
        if(this.selectedPatient == null)
          this.router.navigate(['../view']);
      }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
