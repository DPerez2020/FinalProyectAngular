import { FirebaseCRUDService } from './../../service/firebaseCRUD/firebase-crud.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './../../service/auth/auth.service';
import { Router } from '@angular/router';
import { ProviderService } from './../../service/provider/provider.service';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private serv:ProviderService,private router:Router) { }
  
  restaurant:any;

  ciudad:any;

  buscar(e){
    this.serv.getAllRestaurant(e).subscribe((e:any)=>{
      this.restaurant = e.restaurants;
    });
  }

  ngOnInit(): void {

  }

  reservar(){
    //this.dbService.insertReservation();
    this.router.navigate(['details']); 
  }
}
