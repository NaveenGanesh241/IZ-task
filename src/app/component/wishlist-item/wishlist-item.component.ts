import { Component ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
ngOnInit(): void {
  this.likevalue =this.products.like
  if (this.products.like === true) {
    this.likeicon = "favorite"
  }
  else{
    this.likeicon="favorite_border"
  }
console.log(this.navCatFromParent)
}

constructor(private service: WishlistService, private location:ActivatedRoute,
  private spinner:NgxSpinnerService ) { }

refresh():void{
  this.spinner.show()
  window.location.reload()
  this.spinner.hide()
}
like(val: any) {
  console.log(val)
  this.likevalue = !this.likevalue
  if (this.likevalue === true) {
    this.likeicon = " favorite"
    this.service.updatelike(val.id).subscribe((data)=>{
      // console.log(data)
    })
  }
  else {
    this.likeicon = "favorite_border";
    console.log(val)
    this.service.updatelike2(val.id).subscribe((data)=>{
      // console.log(data)
    })
  }
  this.refresh()
}
}
