import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {



  @Input() products: any
  likeicon: string = " "
  ngOnInit(): void {
    console.log(this.products.like)
    if (this.products.like === true) {
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
    this.likevalue = !this.likevalue
    if (this.likevalue === true) {
      this.likeicon = " favorite"
      console.log(val.like)
      this.service.updatelike(val.id).subscribe((data)=>{
        console.log(data)
      })
    }
    else {
      this.likeicon = "favorite_border";
      console.log(val)
      this.service.updatelike2(val.id).subscribe((data)=>{
        console.log(data)
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