import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css']
})
export class DataformComponent implements OnInit {
constructor(private dialog:MatDialogRef<DataformComponent>, 
  private productservice:ProductService,
  @Inject(MAT_DIALOG_DATA) public data:any
  ){}
 
 ngOnInit(): void {
   this.productdetail.patchValue(this.data)
 }
 val:boolean=true;
  productdetail = new FormGroup({
    brand:new FormControl("",[Validators.required]),
    productname: new FormControl("",[Validators.required]),
    image: new FormControl("",Validators.required),
    price:new FormControl("",[Validators.required]),
    offer:new FormControl("",[Validators.required]),
    stock: new FormControl("",[Validators.required]),
    size: new FormControl ("",[Validators.required])
  })
  
  getcontrol(name:any) :AbstractControl | null
  {
    return this.productdetail.get(name)
  }

  saveproduct(){
    if(this.productdetail.valid){
      if(this.data){
        this.productservice.updateproduct(this.data.id,this.productdetail.value).subscribe({
          next:(val:any)=>{
            console.log("Product Updated Successfully");
            console.log(this.productservice.addproduct)
            
            this.dialog.close(true);
          },
          error:console.log
            })
      }
      else{
        this.productservice.addproduct(this.productdetail.value).subscribe({
          next:(val:any)=>{
            console.log("Product Added Successfully");
            console.log(this.productservice.addproduct)
            this.dialog.close(true);
          },
          error:console.log
            })
      }
      }  
      
  }
}
