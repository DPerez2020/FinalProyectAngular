import { auth } from 'firebase/app';
import { promise } from 'protractor';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import {map, first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Auth: AngularFireAuth, private db: AngularFireDatabase) { }

  loginEmailPasswordUser(email:string, password:string){
    return new Promise((resolve,reject)=>{
      this.Auth.auth.signInWithEmailAndPassword(email,password).then(
        userData=>resolve(userData),
        err=>reject(err));
    });
  };

  isAuth(){
    return this.Auth.authState.pipe(first()).toPromise();
  }

  logoutUser(){
    return this.Auth.auth.signOut();
  }

    registerUser(userEmail:any,userPassword:any){
     return new Promise((resolve,reject)=>{
       this.Auth.auth.createUserWithEmailAndPassword(userEmail, userPassword)
      // Crear usuario
      // Crear usuario
      // En caso de un registro exitoso se ejecutara este codigo
      .then(() => {
        // Creando id en el sistema para los usuarios
        const userID = this.Auth.auth.currentUser.uid;
        console.log(userID)
        const systemID = Date.now();
        // Creando id en el sistema para los usuarios
        // Creando registro en la base de datos
        this.db.database.ref('Users/' + userID + '/').set({
          userID: userID,
          userSystemID: systemID,
          userEmail: userEmail,
        })
        // Creando registro en la base de datos
        // Verificando cuenta del usuario
        this.Auth.auth.currentUser.sendEmailVerification();
        // Verificando cuenta del usuario

        // Alertando al usuario sobre un registro exitoso
        resolve('Registro exitoso');
        // Alertando al usuario sobre un registro exitoso
      })
      // En caso de un registro exitoso se ejecutara este codigo
      // En caso de un error se ejecutara este codigo
      .catch((error) => {
        const errorCodes = error.code;
        switch (errorCodes) {
          case 'auth/invalid-email':
            reject ('Correo incorrecto');
          case 'auth/email-already-in-use':
            reject ('Correo en uso');
            break;
          case 'auth/operation-not-allowed':
            reject ('La operacion no es permitida');
            break;
          case 'auth/weak-password':
            reject('La contraseña es muy pequeña') ;
            break;
        }
      });
     });
  }
}
