import {Component, OnInit, Input, trigger, state, style, transition, animate} from '@angular/core';
import {Patient} from "../shared/patient";
import {NgForm} from "@angular/forms";
import {PatientService} from "../patient.service";

@Component({
  selector: 'app-patient-new',
  templateUrl: './patient-new.component.html',
  styleUrls: ['./patient-new.component.css'],
  animations: [
    trigger('moveOut',[
      state('in', style({
          opacity: 1,
          transition: 'transformY(0)'
      })),
      transition('void => *',[
        style({
          opacity: 0,
          transition: 'transformY(-100px)'
        }),
        animate(1000)
      ]),
      transition('* => void',[
        animate(1000, style({
          transition: 'transformX(100px) scale(0.5)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class PatientNewComponent implements OnInit {

  @Input() patient: Patient;
  isError = false;
  errorMessage:string;
  submitSuccessNoError = false;
  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.isError = this.checkDobAge(form.value.dob, form.value.age);
    console.log('onSubmit fired', this.isError);
    if(!this.isError)
    {
      this.patientService.addPatient(form.value).subscribe(
        data => this.submitSuccessNoError = true,
        error => this.errorMessage = error.json().value
      );
      form.resetForm();
    }
    this.errorMessage = 'Your Age and D.O.B values do not match please try again ';
  }

  onRemove(){
    this.isError = false;
    this.submitSuccessNoError = false;
  }

  checkDobAge(dob:string, age:number):boolean{
    let today_date = new Date();
    let today_year = today_date.getFullYear();
    let today_month = today_date.getMonth();
    let today_day = today_date.getDay();
    let darray = [];
    if(dob.indexOf('.') != -1)
      darray = dob.split('.');
    else if(dob.indexOf('-') != -1)
      darray = dob.split('-');
    else
      darray = dob.split('/');

    let actAge = today_year - (+darray[2]);

    if(today_month < (+darray[1] -1))
      actAge--;
    if(((+darray[1] - 1) == today_month) && (today_day < +darray[0]))
      actAge--;
    return !(actAge == age);
  }

}
