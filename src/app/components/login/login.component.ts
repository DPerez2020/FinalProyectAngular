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

  constructor(private formBuilder:FormBuilder, private router:Router,private authService:AuthService, private location:Location) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userEmail: [''],
      userPassword: [''],
    });
  }
  login(){
    //Obteniendo datos del formulario
    let email=this.loginForm.value.userEmail;
    let pwd=this.loginForm.value.userPassword;
    var result= this.authService.loginEmailPasswordUser(email,pwd);
    //Obteniendo datos del formulario
    result.then((res)=>{
      this.router.navigate(['dashboard'])
      this.location.replaceState('dashboard');
      location.reload();
      this.islogued();
    }).catch((err)=>{
      alert(err);
    });
  };

   async islogued(){
    console.log(await this.authService.isAuth());
  }
}
