import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {

    this.ps.showSpinner()
    setTimeout(()=>{
      this.ps.hideSpinner()
    },500)

    let enclogin = this.url.snapshot.params['login'];
  }
  constructor(private url: ActivatedRoute,private ps:ProductService) {

  }
}
