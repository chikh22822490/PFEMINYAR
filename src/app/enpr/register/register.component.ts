import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Personelle } from '../domain/personelle';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../../crud-global.service';
import { User } from '../../model/user';
 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
// tslint:disable-next-line:max-line-length
export class RegisterComponent implements OnInit {
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  display: boolean = false;
  ojetUrlPersonelle: string = 'personelle';
  personelle:Personelle;
  entitiesPersonelle: Personelle[];
  user: User;
  role: any [];
  form: any = { };
  constructor(private authService: AuthService, private crudservice: CrudGlobalService) { }

  ngOnInit(): void {
    this.role = [];
  }

  roles =[
    {label:'admin', value:'admin'},
    {label:'user', value:'user'},
    {label:'manipulation', value:'manipulation'}
   
    ];

  onSubmit(): void {
    //console.log(this.form);
    this.user  = this.form;
    //console.log(this.user);
    this.user.role = this.role;
    console.log(this.user);
    this.authService.register(this.user).subscribe(

      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  onChange(event) {
   this.role.push(event.value);
   console.log('role : ' + this.role);
  }
  change(matricule: string) { // without type info
    console.log("matricule");
     console.log(matricule);
    // tslint:disable-next-line:no-unused-expression
    this.crudservice.getLigneByMatricule(this.ojetUrlPersonelle, matricule)
    .subscribe(data => {
      console.log(data.result);
      this.personelle = data.result;
      this.form = {matricule: this.personelle.matricule, personelle :this.personelle,  role: this.role,
       password: this.personelle.matricule  };


      });
  }
}
