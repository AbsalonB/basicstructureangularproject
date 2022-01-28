import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../core/http/loginservice/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  public form:FormGroup;
  constructor(private router:Router,
              private formBuilder:FormBuilder, 
              ) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.form = this.formBuilder.group({
      Username:['',[Validators.required]],
      Password:['',[Validators.required]]
    })
  }

  onSubmit(){
    if(this.form.invalid){
      return Object.values(this.form.controls).forEach(control=>{
        control.markAllAsTouched();
      })
    } 
    this.router.navigate(['/home/dashboard']);
  }

  recoverPassword(){
    this.router.navigate(['/home/recoverpassword']);
  }

  get Username():AbstractControl{return this.form.get('Username');}
  get Password():AbstractControl{return this.form.get('Password');}
}
