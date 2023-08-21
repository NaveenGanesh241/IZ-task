import { Component,OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataformComponent } from '../dataform/dataform.component';
import { ProductService } from 'src/app/service/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-datacontrol',
  templateUrl: './datacontrol.component.html',
  styleUrls: ['./datacontrol.component.css']
})
export class DatacontrolComponent implements OnInit{

  displayedColumns: string[] = [
    'id',
    'brand',
    'productname',
    'image',
    'price',
    'offer',
    'stock',
    'size',
    'actions'
  ];
  dataSource!: MatTableDataSource<any>;
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 

 constructor(private dialog:MatDialog ,
   private productservice:ProductService){}
 ngOnInit(): void {
  this.showproduct()
 }

 open(){
   const dialogref= this.dialog.open(DataformComponent)
   dialogref.afterClosed().subscribe({
    next:(val)=>{
      if(val){
        this.showproduct();
      }
    }
   })
 }

 showproduct(){
  this.productservice.showproduct().subscribe({
    next:(res)=>{
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    },
    error:console.log
  })
 }

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

deleteproduct(id:number){
  this.productservice.deleteproduct(id).subscribe({
    next:(res)=>{
      console.log('Deleted product of id ' +id)
      this.showproduct()
    },
    error:console.log,
  })
}

updateproduct(data:any){
 const dialogref= this.dialog.open(DataformComponent,{
    data
  });
  dialogref.afterClosed().subscribe({
    next:(val)=>{
      if(val){
        this.showproduct();
      }
    },
  })
}
}
