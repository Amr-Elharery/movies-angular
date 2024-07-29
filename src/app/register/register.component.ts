import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [AuthService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService){}
  registerForm: FormGroup = new FormGroup({
    "first_name": new FormControl(null, [Validators.required, Validators.minLength(2)]),
    "last_name": new FormControl(null,[Validators.required, Validators.minLength(2)]),
    "email": new FormControl(null,[Validators.required, Validators.email]),
    "password": new FormControl(null, [Validators.required, Validators.minLength(8)])
  })

  register(){
    if(this.registerForm.invalid){
      return;
    }

    try{
      this._AuthService.register(this.registerForm.value).subscribe(
        (response) => {
          console.log(response)
        }
      );
    }
    catch(error){
      console.error(error);
    }

  }
}
