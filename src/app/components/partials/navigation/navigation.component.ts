import { Router } from '@angular/router';
import { AuthService } from './../../../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { isNull } from 'util';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private AuthService:AuthService,private router:Router) { }

  public isLoged:boolean;
  email:any;

  ngOnInit(): void {
    this.AuthService.isAuth().then(userData=>{
      if(!isNull(userData)){
        this.isLoged=true;
        this.email=userData.email;
      }
      else{
        this.isLoged=false;
      }
    });
  }
  
  cerrarsession():void{
    this.AuthService.logoutUser();
  }
}
