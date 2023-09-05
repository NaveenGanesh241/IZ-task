import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})
export class CommonTableComponent implements OnInit {
  @Input() columns: string[] = [];
  @Input() data: any;
  ngOnInit(): void {
    console.log(this.data)
  }
}
