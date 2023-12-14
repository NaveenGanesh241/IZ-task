import { Component ,Input} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { WishlistService } from 'src/app/service/wishlist.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent {
@Input()products:any
@Input()navCatFromParent="";

likeicon: string = " ";
likevalue!: boolean;
cartIcon:string =" "
cartValue!:boolean
count=1
sizeList!:any[]

ngOnInit(): void {
  this.likevalue =this.products.like
  this.cartValue=this.products.isCart
  if (this.products.like === true) {
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
// console.log(this.navCatFromParent)
this.sizeList=this.products.size.split(',')
}

constructor(private service: WishlistService, private location:ActivatedRoute,
  private spinner:NgxSpinnerService ) { }

refresh():void{
  this.spinner.show()
  window.location.reload()
  this.spinner.hide()
}
increase(){
  this.count++
}
decrease(){
  if(this.count>1){
  this.count--
  }
}
like(val: any) {
  console.log(val)
  this.likevalue = !this.likevalue
  if (this.likevalue === true) {
    this.likeicon = " favorite"
    this.service.updatelike(val.id).subscribe((data)=>{
      // console.log(data)
      window.location.reload()
    })
  }
  else {
    this.likeicon = "favorite_border";
    console.log(val)
    this.service.updatelike2(val.id).subscribe((data)=>{
      // console.log(data)
      window.location.reload()
    })
  }
  if(this.navCatFromParent=='wishlist'){
  this.refresh()
  }
}
cart(val:any){
  console.log(!this.cartValue)
  this.cartValue = !this.cartValue
  if (this.cartValue === true) {
    this.cartIcon = "remove_shopping_cart"
    this.service.updateCart(val.id).subscribe((data)=>{
      window.location.reload()
    })
  }
  else {
    this.cartIcon = "add_shopping_cart";
    this.service.updateCart1(val.id).subscribe((data)=>{
      window.location.reload()
    })
  }
  if(this.navCatFromParent=='cart'){
  this.refresh()
  }
}

}
