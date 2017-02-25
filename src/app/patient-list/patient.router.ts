import {Routes} from "@angular/router";
import {PatientStartComponent} from "./patient-start.component";
import {PatientDetailComponent} from "./patient-detail.component";
/**
 * Created by ARVIND on 2/24/2017.
 */
export const PATIENT_ROUTES: Routes = [
  {path: '', component: PatientStartComponent},
  {path: ':id', component: PatientDetailComponent}
];
