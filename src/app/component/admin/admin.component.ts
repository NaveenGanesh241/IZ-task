import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
constructor( private router:Router){}


  adminloginform={
    email:'',
    password:''
  }
  emailregex = "admin@gmail.com"
  passwordregex="Admin@123"
  adminfn(){
    console.log(this.adminloginform)
    console.log("adminlogin works")
    this.router.navigate(['admin/data'])
  }
}
