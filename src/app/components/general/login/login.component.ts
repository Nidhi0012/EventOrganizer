import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Utilities/Model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private _formBuilder:FormBuilder, private _router:Router) {

}  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
user:User=new User();

  loginForm:FormGroup= this._formBuilder.group({
  name:[this.user.name,Validators.required],
  email:[this.user.email,Validators.required],
  password:[this.user.password,Validators.required],
  mobile_number:[this.user.mobile_number,Validators.required]
  });

  login(){
    console.log("logged in");
    console.log(this.user.userId);
    console.log(this.loginForm.value["name"]);
    console.log(this.loginForm.value["email"]);
    console.log(this.loginForm.value["password"]);
    console.log(this.loginForm.value["mobile_number"]);
  
    this.ngOnInit();void {
  }
}
}