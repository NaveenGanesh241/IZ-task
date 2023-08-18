import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  // @ViewChild('adminlogin') adminlogin!:NgForm
  adminloginform={
    email:'',
    password:''
  }
  emailregex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  adminfn(){
    console.log(this.adminloginform)
  }
}
