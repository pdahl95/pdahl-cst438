import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getProducts().subscribe(data =>{
      this.products = data;
      console.log(this.products);
    });
  }

}
