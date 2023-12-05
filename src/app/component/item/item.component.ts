import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {



  @Input() products: any
  likeicon: string = " ";
  cartIcon:string =" "
  likevalue!: boolean
  cartValue!:boolean
  ngOnInit(): void {
    this.likevalue=this.products.like
    this.cartValue=this.products.isCart
    if (this.products.like == true) {
      this.likeicon = "favorite"
    }
    else{
      this.likeicon="favorite_border"
    }
    if (this.products.isCart == true) {
      this.cartIcon = "remove_shopping_cart"
    }
    else{
      this.cartIcon="add_shopping_cart"
    }

  }
  
  constructor(private service: WishlistService) { }


  like(val: any) {
    this.likevalue = !this.likevalue
    if (this.likevalue === true) {
      this.likeicon = " favorite"
      this.service.updatelike(val.id).subscribe((data)=>{
      })
    }
    else {
      this.likeicon = "favorite_border";
      this.service.updatelike2(val.id).subscribe((data)=>{
      })
    }

  }

  cart(val:any){
    // console.log(!this.cartValue)
    this.cartValue = !this.cartValue
    if (this.cartValue === true) {
      this.cartIcon = "remove_shopping_cart"
      this.service.updateCart(val.id).subscribe((data)=>{
      })
    }
    else {
      this.cartIcon = "add_shopping_cart";
      this.service.updateCart1(val.id).subscribe((data)=>{
      })
    }
  }
}




// this.service.likeArray.forEach((element:any) => {
//   if(element.id===val.id)
//   {
//     if(element.id>0){
//       console.log(val.id)
//       this.service.likeArray.splice(element.id-1,1)

//     }
//     else
//     {
//       console.log(val.id)
//       this.service.likeArray.splice(element.id,1)
//     }
//   }
// });