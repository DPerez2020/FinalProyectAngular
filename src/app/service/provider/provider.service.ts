import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http:HttpClient) { }
  getAllRestaurant(city:string){
    return this.http.get(`https://opentable.herokuapp.com/api/restaurants?city=${city}`);
  }

  getAllCitiest() {
    return this.http.get("https://opentable.herokuapp.com/api/cities");
  }

  getSingleRestaurant(id){
    return this.http.get(`https://opentable.herokuapp.com/api/restaurants/${id}`);
  }
}
