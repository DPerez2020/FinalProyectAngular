import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../service/auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authService:AuthService,private auth:AngularFireAuth,private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     //Verifica si esta logueado
      return this.auth.authState
      .pipe(take(1))
      .pipe((map(authState=>!!authState)))
      .pipe(tap(auth=>{
        if(!auth){
          this.router.navigate(['login']);
        }
      }));
  }
}
