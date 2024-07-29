import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  providers:[AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private _AuthService: AuthService){}

  loginForm: FormGroup = new FormGroup({
    "email": new FormControl(null,[Validators.required, Validators.email]),
    "password": new FormControl(null, [Validators.required, Validators.minLength(8)])
  })
  login(){
    if(this.loginForm.invalid){
      return;
    }

    this._AuthService.login(this.loginForm.value).subscribe(res => {
      console.log(res);
    })
  }
}
