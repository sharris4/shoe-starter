import { Component, OnInit } from '@angular/core';
import { Shoe } from '../models/shoe.model';
//import * as data from '../../assets/mock/air-jordan-6-doernbecher.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shoe-profile',
  templateUrl: './shoe-profile.component.html',
  styleUrls: ['./shoe-profile.component.scss']
})
export class ShoeProfileComponent implements OnInit {

  shoe: Shoe;
  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/mock/air-jordan-6-doernbecher.json");
  }

  ngOnInit() {
    this.getJSON().subscribe(data => {
      this.shoe = new Shoe;
      this.shoe.name = data.name;
      this.shoe.description = data.description;
      this.shoe.price = data.price;
      this.shoe.releaseDate = data.releaseDate;
      this.shoe.imageUrls = data.imageUrls;
    });
  }

}
