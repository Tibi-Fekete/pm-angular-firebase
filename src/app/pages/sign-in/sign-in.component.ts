import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  contactFrom: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  loginForm: FormGroup = new FormGroup({
    loginEmail: new FormControl('', [Validators.required, Validators.email]),
    loginPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  get email() { return this.contactFrom.get('email'); }

  get password() { return this.contactFrom.get('password'); }

  get loginEmail() { return this.loginForm.get('loginEmail'); }

  get loginPassword() { return this.loginForm.get('loginPassword'); }

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  async submitContactForm() {
    console.log('reg adatok')
    console.log(this.contactFrom.value);

  }


  login(){
    console.log('login adatok')
    console.log(this.loginForm.value)

  }

  loginWithGoogle(){

  }

}
