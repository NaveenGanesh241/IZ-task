import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
constructor( private router:Router ){}
ngOnInit(): void {
  // this.spinner.show();

  // setTimeout(() => {
  //   /** spinner ends after 5 seconds */
  //   this.spinner.hide();
  // }, 5000);
  }


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
