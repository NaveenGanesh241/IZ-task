import { Component ,Input} from '@angular/core';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent {
@Input()products:any
likeicon: string = " "
ngOnInit(): void {
  console.log(this.products)
  if (this.products.like === true) {
    console.log(this.products)
    this.likeicon = "favorite"
  }
  else{
    this.likeicon="favorite_border"
  }

}
likevalue!: boolean


localstr: any = localStorage.getItem('Array');
localarray = JSON.parse(this.localstr)


constructor(private service: WishlistService) { }

default(val: any) {
  // console.log(this.localarray);
  // console.log(val)
  // console.log(this.localarray.includes(val))
  if (this.localarray.includes(val)) {
    this.likeicon = "favorite"
  }
}

like(val: any) {
  console.log(val)
  this.likevalue = !this.likevalue
  // if (this.likevalue === true) {
  //   this.likeicon = " favorite"
  //   this.service.updatelike(val.id).subscribe((data)=>{
  //     // console.log(data)
  //   })
  // }
  // else {
    this.likeicon = "favorite_border";
    console.log(val)
    this.service.updatelike2(val.id).subscribe((data)=>{
      // console.log(data)
    })
  // }
}

}
