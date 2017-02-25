import {Injectable, EventEmitter} from '@angular/core';
import {Patient} from "./shared/patient";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Subscription} from "rxjs";

@Injectable()
export class PatientService {
  patients: Patient[] = null;
  patientsChanged = new EventEmitter<Patient[]>();
  isPatientAdded = false;
  constructor(private http: Http) {
    this.getPatients();
  }

  staticPatients(){
    return this.patients;
  }

  getPatients(): Subscription | Patient[]{
    if(!this.isPatientAdded && this.patients != null){
      return this.patients;
    }
    return this.http.get('https://dataphilabs.firebaseio.com/patients.json').
    map((response: Response) => response.json()).
    subscribe(
      (data)  => {
        this.patients = data;
        this.patientsChanged.emit(this.patients);
      }
    );
  }

  getPatient(id: number){
    if(this.patients == null)
      return null;
    return this.patients[id];
  }

  addPatient(patient: Patient){
    this.patients.push(patient);
    const body = JSON.stringify(this.patients);
    const headers = new Headers({
      'Content-type': 'application/json'
    });
    this.isPatientAdded = true;
    return this.http.put('https://dataphilabs.firebaseio.com/patients.json', body, {headers: headers});
  }

  getisPatientAdded(){
    return this.isPatientAdded;
  }



  reEmitstaticPatients(){
    this.patientsChanged.emit(this.patients);
  }

}
