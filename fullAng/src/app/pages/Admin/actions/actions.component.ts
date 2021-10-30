import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/provider/services/global.service';
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  constructor(public _global:GlobalService) { }

  ngOnInit(): void {
    this._global.isAdmin=true
  }

}
