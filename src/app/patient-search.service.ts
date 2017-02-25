import { Injectable } from '@angular/core';
import {PatientService} from "./patient.service";
import {Patient} from "./shared/patient";

@Injectable()
export class PatientSearchService {

  constructor(private patientService: PatientService) { }

  didSearch  = false;
  res: Patient[] = [];
  searchPatient(name:string){
    this.res = [];
    let nameArray: any;
    nameArray = name.split(" ");
    this.didSearch = true;
    if(nameArray.length == 1)
    {
      for(let i=0; i<this.patientService.patients.length; i++)
      {
        if(this.patientService.patients[i].firstname.trim() == nameArray[0].trim())
        {
          this.res.push(this.patientService.patients[i]);
        }
      }
    }
    if(nameArray.length == 2)
    {
      for(var i=0; i<this.patientService.patients.length; i++)
      {
        if(this.patientService.patients[i].firstname.trim() == nameArray[0].trim() && this.patientService.patients[i].lastname.trim() == nameArray[1].trim())
        {
          this.res.push(this.patientService.patients[i]);
        }
      }
    }
    this.patientService.patientsChanged.emit(this.res);
  }

  getPatient(patientId:number){
    return this.res[patientId];
  }
}
