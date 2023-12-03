import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'
import { Router } from '@angular/router';
import { gender } from '../enum/gender-enum'
import { SignupService } from 'src/app/service/signup.service';
@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  ngOnInit(): void {
    this.showusers()
    // console.log(this.usersdata)


  }
  usersdata: any = [];
  Genders: gender[] = [gender.Male, gender.Female, gender.Transgender, gender.Non_conforming, gender.Prefer_not_to_respond]
  constructor(private router: Router, private service: SignupService) {

  }

  signinForm = {
    mail: '',
    password: ''
  }
  emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  signinFuncion() {
    console.log(this.signinForm)
    let enclogin = btoa(JSON.stringify(this.signinForm))

    this.router.navigate(['home']);
  }




  //SignUp FORM

  signupForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(32)]),
    email: new FormControl("", [Validators.required, Validators.email, Validators.maxLength(32)]),
    phone: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    location: new FormControl("", [Validators.required]),
    gender: new FormControl("", Validators.required),
    password: new FormControl("", [Validators.required, Validators.maxLength(12), Validators.minLength(8)]),
    confirm_password: new FormControl("", [Validators.required, Validators.maxLength(12), Validators.minLength(8)])
  })

  getcontrol(name: any): AbstractControl | null {
    return this.signupForm.get(name)
  }


  signupfn() {
    console.log(this.signupForm.value)
    this.router.navigate(["home"]);
    this.service.adduser(this.signupForm.value).subscribe({
      next: (val: any) => {
        console.log("USER DATA Added Successfully");
      },
      error: console.log
    })
  }
  showusers() {
    this.service.showusers().subscribe({
      next: (res) => {
        this.usersdata = res
        console.log(this.usersdata[0].name)
      },
      error: console.log
    })
  }


}
