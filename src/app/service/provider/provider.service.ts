import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http:HttpClient) { }
  getRestaurant(city:string){
    return this.http.get("https://opentable.herokuapp.com/api/restaurants?city="+city);
  }
  getCities(){
    return this.http.get("https://opentable.herokuapp.com/api/cities");
  }
}
