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
  likevalue!: boolean
  ngOnInit(): void {
    this.likevalue=this.products.like
    if (this.products.like == true) {
      this.likeicon = "favorite"
    }
    else{
      this.likeicon="favorite_border"
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