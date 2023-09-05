import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    let enclogin = this.url.snapshot.params['login'];
    console.log(atob(enclogin))

  }
  constructor(private url: ActivatedRoute) {

  }
}
