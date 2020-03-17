import { AuthService } from '../../service/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router,private authService:AuthService) { }

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
      //console.log("Login Result:");
      //console.log(res);
      //this.router.navigate([''])
    }).catch((err)=>{
      alert(err);
    });
  };

  async islogued(){
    await this.authService.isAuth().then((user)=>{
      console.log("Is logged");
      console.log(user);
  })
}
}
