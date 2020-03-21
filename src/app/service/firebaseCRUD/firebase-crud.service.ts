import { AuthService } from './../auth/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCRUDService {

  constructor( private auth:AuthService,private db:AngularFireDatabase) { }

  

}
