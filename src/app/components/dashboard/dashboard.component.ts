import { AngularFireDatabase } from '@angular/fire/database';
import { auth } from 'firebase/app';
import { AuthService } from './../../service/auth/auth.service';
import { Router } from '@angular/router';
import { ProviderService } from './../../service/provider/provider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private serv:ProviderService,private router:Router,private AuthService:AuthService,private AngularFireDatabase:AngularFireDatabase) { }

  restaurant:any;

  ngOnInit(): void {
    this.serv.getRestaurant("Chicago").subscribe((e:any)=>{
      this.restaurant = e.restaurants;
      console.log(e.restaurants);
    });
  }

  reservar(){
    this.router.navigate(['reserve']); 
  }

}
