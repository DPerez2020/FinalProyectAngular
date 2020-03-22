import { AuthService } from './../auth/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCRUDService {

  constructor( private auth:AuthService,private db:AngularFireDatabase) { }

   insertReservation(date:Date,Time:Time,restaurantId:any){
    const systemID = Date.now();
     this.auth.isAuth().then(data=>{
       const userid=data.uid;
       this.db.database.ref('Reservations/'+systemID+'/').set({ 
        Date:date,
        Time:Time,
        RestaurantId:restaurantId,
        UserId:userid
       });
       //if(data.emailVerified){

       //}
       //else{
       //  return "Debe primero verificar su cuenta de usuario en el correo electronico.";
       //}
     });
   }
}
