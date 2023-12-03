import { Component, Inject, OnInit, ViewChild, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css']
})
export class DataformComponent implements OnInit {
  value1: boolean = false
  constructor(private dialog: MatDialogRef<DataformComponent>,
    private productservice: ProductService,
    private spinner: NgxSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.productdetail.patchValue(this.data.data)
    this.value1 = this.data?.value
  }
  val: boolean = true;
  catList = ["Men","Women","Kids","Unisex"];
  productdetail = new FormGroup({
    brand: new FormControl("", [Validators.required]),
    productname: new FormControl("", [Validators.required]),
    image: new FormControl("", Validators.required),
    price: new FormControl("", [Validators.required]),
    offer: new FormControl("", [Validators.required]),
    stock: new FormControl("", [Validators.required]),
    size: new FormControl("", [Validators.required]),
    like: new FormControl(false),
    catageory: new FormControl("",[Validators.required]),
    isCart:new FormControl(false),
  })

  getcontrol(name: any): AbstractControl | null {
    return this.productdetail.get(name)
  }

  saveproduct() {
    if (this.productdetail.valid) {
      if (this.data) {
        this.productservice.updateproduct(this.data.data.id, this.productdetail.value).subscribe({
          next: (val: any) => {
            console.log("Product Updated Successfully");
            console.log(this.productservice.addproduct)

            this.dialog.close(true);
          },
          error: console.log
        })
      }
      else {
        this.productservice.addproduct(this.productdetail.value).subscribe({
          next: (val: any) => {
            console.log("Product Added Successfully");
            console.log(val)
            this.dialog.close(true);
          },
          error: console.log
        })
      }
      console.log(this.productdetail.value)
    }
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}
