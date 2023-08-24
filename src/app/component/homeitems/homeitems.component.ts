import { Component ,OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-homeitems',
  templateUrl: './homeitems.component.html',
  styleUrls: ['./homeitems.component.css']
})
export class HomeitemsComponent implements OnInit {
constructor(private productservice:ProductService){}
ngOnInit():void{
  this.getproduct()
}
products:any
getproduct(){
  this.productservice.showproduct().subscribe({
    next:(res)=> {
      this.products = res
      console.log(this.products)
    },
    error:console.log
  })
}


}
