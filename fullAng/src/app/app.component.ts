import { Component } from '@angular/core';
import { GlobalService } from 'src/app/provider/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fullAng';
  constructor(public _global:GlobalService) { }

}
