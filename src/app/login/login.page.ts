import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private userSrv: UserService) { }
  error: string = '';
  formLogin: any;

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    })
  }
  doLogin() {
    let email = this.formLogin.get('email').value;
    let password = this.formLogin.get('password').value;

    let user = this.userSrv.login(email, password);
    if (user != null) {
      this.router.navigateByUrl('tabs');
    } else {
      this.error = "Error, credenciales incorrectas";
    }
  }




}
