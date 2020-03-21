import { Router } from '@angular/router';
import { AuthService } from './../../service/auth/auth.service';

import { ProviderService } from './../../service/provider/provider.service';
import { Component, OnInit } from '@angular/core';
import { isNull } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private serv:ProviderService,private authService:AuthService,private router: Router) { }
  
  restaurant: any=[]
  
  ngOnInit(): void {    
    //Verifica si el usuario esta logueado para redirigirlo al dashboard
    this.islogued().then((data)=>{
      //En caso de que no carga la data inicial
      if(isNull(data)){
        this.serv.getRestaurant("Chicago").subscribe((e:any)=>{
          this.restaurant = e.restaurants;
          console.log(e.restaurants);
        });
      }
      else{
        this.router.navigate(['dashboard']);
      }
    });
    }
    //Verifica si el usuario esta logueado
  async islogued(){
    var data=await this.authService.isAuth();
    return data;
  }
}
