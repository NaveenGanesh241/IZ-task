import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  path!:string
  ngOnInit(): void {
    console.log(this.location.snapshot.url[0].path)
    this.path=this.location.snapshot.url[0].path
  }
  constructor(private router: Router,private location:ActivatedRoute) { }
  logout() {
    this.router.navigate([""])
  }
  admin() {
    this.router.navigate(['admin'])
  }
}
