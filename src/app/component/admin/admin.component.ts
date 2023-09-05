import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  durationInSeconds = 5;
  constructor(private router: Router, private _snackBar: MatSnackBar, private spinner: NgxSpinnerService,) { }
  ngOnInit(): void {

  }


  adminloginform = {
    email: '',
    password: ''
  }
  emailregex = "admin@gmail.com"
  passwordregex = "Admin@123"
  adminfn() {
    console.log(this.adminloginform)
    console.log("adminlogin works")
    this.router.navigate(['admin/data'])
    this.openSnackBar('Login Successfull')
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
    setTimeout(() => {
      this._snackBar.dismiss();
    }, 1000);

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}
