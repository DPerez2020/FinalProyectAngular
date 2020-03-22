import { AuthService } from '../../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { __await } from 'tslib';
import {Location} from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //Global variables
  registerForm: FormGroup;
  itemRef: any;
  
  constructor(private router: Router,private location:Location,
              private formBuilder: FormBuilder,private AuthService: AuthService) { }
 //Inicializando el formulario
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userEmail: ['', [Validators.required,Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  // Funcion para crear nuevos usuarios en el sistema
   createUser() {
    // Extrayendo datos del formulario
    const userEmail = this.registerForm.value.userEmail;
    const userPassword = this.registerForm.value.userPassword;
    // Extrayendo datos del formulario
    var result=  this.AuthService.registerUser(userEmail,userPassword);
    result.then((res)=>{
      alert(res);
      this.goToLogin();
    }).catch((err)=>{
      alert(err);
    });
  }

  // Funcion para ir al login
  goToLogin() {
    this.router.navigate(['/dashboard']);
  }
}
