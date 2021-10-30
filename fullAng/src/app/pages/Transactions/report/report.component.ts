import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/provider/services/global.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  transactionData:any=[]
  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
    this.transaction()
  }

  transaction(){
    this._global.transaction().subscribe(data=>{
      this.transactionData = data.data
      console.log(this.transactionData)
    })
  }

}
