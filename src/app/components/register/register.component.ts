import { AuthService } from '../../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { __await } from 'tslib';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //Global variables
  registerForm: FormGroup;
  itemRef: any;
  //Global variables

  constructor(private router: Router, private userAuth: AngularFireAuth, private rltDatabase: AngularFireDatabase,
              private formBuilder: FormBuilder,private AuthService: AuthService) { }
 //Inicializando el formulario
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(16)]],
    });
    //Inicializando el formulario
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
  // Funcion para crear nuevos usuarios en el sistema


  goToLogin() {
    this.router.navigate(['/login']);
  }
  // Funcion para ir al login
}
