import { Component,OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  ngOnInit(): void {
    this.getproduct()
  }
  products:any
  constructor(private productservice:ProductService){}
  getproduct() {
    this.productservice.showproduct().subscribe({
      next: (res) => {
        this.products = res
        console.log(this.products)
      },
      error: console.log
    })
  }
}
