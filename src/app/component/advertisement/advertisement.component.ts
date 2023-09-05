import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
adi:any = [];
index:number = 0;
ngOnInit(): void {
  setInterval(()=>{
    this.adfn();
  },2000)
}

  ad=[
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5f478a106d047aba.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/614e44319ca8d3fc.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ca2843e62171405e.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4f4572bcb0801326.jpg?q=20"
  ]
  // ad=[
  //   "a",
  //   "b",
  //   "c",
  //   "d",
  // ]
  // adfn() {
  //       let i = 0;
  //       setInterval(() => {
  //         // console.log(i)
  //         // console.log(this.ad[i])
  //         if(i == 3){
  //           i = -1;
  //         }
  //         i++;
  //       }, 1000);
  //       // this.adi = this.ad[i]
      
  //   }
    
adfn(){
  // for(let i=0;i<this.ad.length;i++){
    
  // }
  console.log('fsag')
  this.adi = this.ad[this.index]
  if(this.index === 3){
    this.index = -1;
  }
  this.index++
  }
  

}
