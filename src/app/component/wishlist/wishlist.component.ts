import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { WishlistService } from 'src/app/service/wishlist.service';

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
  cartCount:number=0;
  navCat:string="";
  constructor(private productservice:ProductService,private route:ActivatedRoute,private ws:WishlistService){}
  getproduct() {
    this.productservice.showproduct().subscribe({
      next: (res) => {
        this.products = res
        this.products.forEach((element:any) => {
          if(element.like==true){
            this.likeCount=this.likeCount+1
          }
          if(element.isCart==true){
            this.cartCount=this.cartCount+1
          }
        });
      },
      error: console.log
    })
  }
  removeAllFromCart(val:any[]){
    val.forEach((element) => {
      if(element.isCart==true){
        this.cart(element.id)
      }
    });
    window.location.reload()
  }
  cart(id:any){
    console.log("works")
      this.ws.updateCart1(id).subscribe((data)=>{
      })
    }
}
