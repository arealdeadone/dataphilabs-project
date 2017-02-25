import {Routes, RouterModule} from "@angular/router";
import {PatientListLoaderComponent} from "./patient-list/patient-list-loader.component";
import {PatientNewComponent} from "./patient-new/patient-new.component";
import {PATIENT_ROUTES} from "./patient-list/patient.router";
/**
 * Created by ARVIND on 2/24/2017.
 */

const APP_ROUTES:Routes = [
  {path: '', redirectTo: 'view', pathMatch: 'full'},
  {path: 'view', component: PatientListLoaderComponent, children: PATIENT_ROUTES},
  {path: 'new', component: PatientNewComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
