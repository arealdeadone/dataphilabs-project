import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailComponent } from './patient-list/patient-detail.component';
import { PatientNewComponent } from './patient-new/patient-new.component';
import { HeaderComponent } from './header/header.component';
import { PatientItemComponent } from './patient-list/patient-item.component';
import { PatientListLoaderComponent } from './patient-list/patient-list-loader.component';
import {routing} from "./app.routing";
import {PatientService} from "./patient.service";
import { PatientStartComponent } from './patient-list/patient-start.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientDetailComponent,
    PatientNewComponent,
    HeaderComponent,
    PatientItemComponent,
    PatientListLoaderComponent,
    PatientStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
