import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators,AbstractControl} from '@angular/forms'
import { Router } from '@angular/router';
import {gender} from '../enum/gender-enum'
@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent {
  Genders: gender[]=[gender.Male,gender.Female,gender.Transgender,gender.Non_conforming,gender.Prefer_not_to_respond]
  constructor(private router:Router){

  }
  
  signinForm={
    mail:'',
    password:''
  }
  emailregex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  signinFuncion(){
    console.log(this.signinForm)
    this.router.navigate(["home"]);
  }

  //SignUp FORM

  signupForm =new FormGroup({
    name : new FormControl("",[Validators.required , Validators.maxLength(32)]),
    email :new FormControl("",[Validators.required,Validators.email,Validators.maxLength(32)]),
    phone: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    location:new FormControl("",[Validators.required]),
    gender:new FormControl("",Validators.required),
    password:new FormControl("",[Validators.required,Validators.maxLength(12),Validators.minLength(8)]),
    confirm_password:new FormControl("",[Validators.required,Validators.maxLength(12),Validators.minLength(8)])
  })

  getcontrol(name:any) :AbstractControl | null
  {
    return this.signupForm.get(name)
  }
  signupfn(){
    console.log(this.signupForm.value)
    this.router.navigate(["home"]);
  }
}
