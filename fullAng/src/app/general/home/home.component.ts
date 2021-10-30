import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/provider/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home:any[]=["assets/1.jpg"]
  homeImgs: any[] = [
    "assets/1.jpg" , "assets/currency.jpg", "assets/2.jpg"
  ]


  constructor(public _global:GlobalService) { }

  ngOnInit(): void {
  }


  

}  

