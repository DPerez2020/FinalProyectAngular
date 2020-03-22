import { AuthService } from './../auth/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Time } from '@angular/common';
import { promise } from 'protractor';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCRUDService {

  constructor( private auth:AuthService,private db:AngularFireDatabase) { }

    insertReservation(date,Time,restaurantId,tablesize){
    const systemID = Date.now();
    return new Promise((resolve,rejects)=>{
      //if(data.emailVerified){
      //}
      //else{
         //  rejects ("Debe primero verificar su cuenta de usuario en el correo electronico.");
         //}
      this.auth.isAuth().then(data=>{
       const userid=data.uid;
       this.db.database.ref('Reservations/'+systemID+'/').set({ 
        Date:date,
        Time:Time,
        RestaurantId:restaurantId,
        UserId:userid,
        TableSize:tablesize
       })
       resolve("La reservacion se realizo con exito.");
    }).catch(err=>{
      rejects(err);
      });
     });
   }

   getReservations(userId){
     return this.db.list('/Reservations',ref=>ref.orderByChild('UserId').equalTo(userId));
   }
   deleteReservation(userId){
     return this.db.list('/Reservations/'+userId).remove();
   }
}
