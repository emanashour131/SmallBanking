import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/provider/services/global.service';

@Component({
  selector: 'app-reportwith',
  templateUrl: './reportwith.component.html',
  styleUrls: ['./reportwith.component.css']
})
export class ReportwithComponent implements OnInit {

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
