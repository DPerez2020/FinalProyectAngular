import { log } from 'util';
import { AuthService } from '../../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  success:boolean=false;

  constructor(private formBuilder:FormBuilder, private router:Router,private authService:AuthService, private location:Location) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userEmail: ['',[Validators.required,Validators.email]],
      userPassword: ['',[Validators.minLength(9),Validators.required]],
    });
  }
  login(){ 
    if(this.loginForm.valid){
      //Obteniendo datos del formulario
      let email=this.loginForm.value.userEmail;
      let pwd=this.loginForm.value.userPassword;
      var result= this.authService.loginEmailPasswordUser(email,pwd);
      //Obteniendo datos del formulario
      result.then((res)=>{
        this.success=true;
        alert(res);
        this.router.navigate(['dashboard'])
        this.location.replaceState('dashboard');
        location.reload();
      }).catch((err)=>{
        this.success=false;
        switch (err.code) {
          case 'auth/user-not-found':
            alert("El usuario no esta registrado");
            break;
          case "auth/wrong-password":
            alert('Contraseña incorrecta');
            break;
        }
      });
    };
  }
}
