import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  ngOnInit(): void {
    this.productservice.showSpinner();
    setTimeout(() => {
      this.productservice.hideSpinner();
    }, 1000);  
    this.getproduct();
    this.route.params.subscribe((params:Params)=>this.navCat=params['nav'])
  }
  products:any
  likeCount:number=0;
  navCat:string="";
  constructor(private productservice:ProductService,private route:ActivatedRoute){}
  getproduct() {
    this.productservice.showproduct().subscribe({
      next: (res) => {
        this.products = res
        this.products.forEach((element:any) => {
          if(element.like==true){
            this.likeCount=this.likeCount+1
          }
        });
      },
      error: console.log
    })
  }
}
