import { Component, OnInit } from '@angular/core';
import { FuncionsService } from '../service/funcions.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public funcionsService: FuncionsService) { }


  ngOnInit() {
  }

}
