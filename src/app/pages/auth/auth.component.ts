import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  errorSession: boolean = false;
  formLogin: UntypedFormGroup = new UntypedFormGroup({});

  constructor(
    private authService: AuthService,
    private cookie: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = new UntypedFormGroup({
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this.authService
      .sendCredentials(email, password)
      .subscribe(
        (responseOk) => {

          console.log('Session iniciada correcta', responseOk);
          const { tokenSession, data } = responseOk;
          this.cookie.set('token', tokenSession, 4, '/');
          this.router.navigate(['/', 'tracks']);
        },
        (err) => {
          this.errorSession = true;
          console.log('⚠⚠⚠⚠Ocurrio error con tu email o password');
        }
      );
  }
}
