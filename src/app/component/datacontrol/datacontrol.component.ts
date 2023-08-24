import { Component,OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataformComponent } from '../dataform/dataform.component';
import { ProductService } from 'src/app/service/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {Chart,registerables} from '../../../../node_modules/chart.js';
Chart.register(...registerables)

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

   chartdata:any;
   labeldata:any[]=[]
   realdata:any[]=[]

 ngOnInit(): void {
  this.productservice.showproduct().subscribe(result=>{
    this.chartdata=result
    if(this.chartdata!=null){
      for(let i=0;i<this.chartdata.length;i++)
      {
        // console.log(this.chartdata[i])
        this.labeldata.push(this.chartdata[i].productname)
        this.realdata.push(this.chartdata[i].stock)
      }
    }
  })
  this.showproduct()
  this.chart(this.labeldata,this.realdata)
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

chart(labedata:any,realdata:any){
  
const ctx = new Chart('myChart' ,{
    type: 'bar',
    data: {
        labels: labedata,
        datasets: [{
            label: '# of Votes',
            data: realdata,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(0,255,255,0.2)',
                'rgba(0,128,0,0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
  }
}
