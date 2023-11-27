import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataformComponent } from '../dataform/dataform.component';
import { ProductService } from 'src/app/service/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Chart, registerables } from '../../../../node_modules/chart.js';
import { Location } from '@angular/common';
Chart.register(...registerables)

@Component({
  selector: 'app-datacontrol',
  templateUrl: './datacontrol.component.html',
  styleUrls: ['./datacontrol.component.css']
})
export class DatacontrolComponent implements OnInit, AfterViewInit {


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
  chartvalue: boolean = false;
  tablevalue: boolean = false

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialog: MatDialog,
    private productservice: ProductService,
    private location: Location
  ) { }
  ngAfterViewInit(): void {

  }
  btnvalue = "View Chart"
  chartdata: any;
  labeldata: any[] = []
  realdata: any[] = []
  crumbvalue: string = "Table"

  ngOnInit(): void {
    this.chartvalue = false
    this.productservice.showproduct().subscribe(result => {
      this.chartdata = result
      if (this.chartdata != null) {
        for (let i = 0; i <= this.chartdata.length; i++) {
          this.labeldata.push(this.chartdata[i].productname)
          this.realdata.push(this.chartdata[i].stock)
        }
      }
    })
    this.showproduct()

  }



  open() {
    const dialogref = this.dialog.open(DataformComponent)
    dialogref.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.showproduct();
        }
      }
    })
  }
  openDialog(template:any){
    const dialogref = this.dialog.open(template,{
      width:'400px',
      height:'150px'
    })
  }
  closeDialog(){
    const dialogref = this.dialog.closeAll()
  }
  showproduct() {
    this.productservice.showproduct().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  deleteproduct(id: number) {
    this.productservice.deleteproduct(id).subscribe({
      next: (res) => {
        console.log('Deleted product of id ' + id)
        this.showproduct()
        this.closeDialog()
      },
      error: console.log,
    })
  }

  updateproduct(data: any) {
    const dialogref = this.dialog.open(DataformComponent, {
      data: {
        data: data
      }
    });
    dialogref.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.showproduct();

        }
      },
    })
    console.log(data.data)
  }

  viewproduct(data: any, val: boolean) {
    const dialogview = this.dialog.open(DataformComponent, {
      data: {
        data: data,
        value: val
      },
    },)
  }

  back() {
    this.location.back();
  }
  viewChart() {
    this.tablevalue = true
    this.crumbvalue = "Chart"
    this.chartvalue = false;
    if (!this.chartvalue) {
      this.chart(this.labeldata, this.realdata);
    }

  }
  viewtable() {
    this.tablevalue = false
    this.chartvalue = true
    this.crumbvalue = "Table"
  }
  chart(labedata: any, realdata: any) {

    const ctx = new Chart('myChart', {
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
  AfterViewInit() { }
}
