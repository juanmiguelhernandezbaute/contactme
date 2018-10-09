import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User = new User();
  userId = '';

  message = false;
  authenticating = false;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['',
        Validators.required
      ],
      password: ['',
        Validators.required
      ]
    });
  }

  onSubmit() {
    this.authenticating = true;
    this.message = false;
    this.user.email = this.loginForm.get('email').value;
    this.user.password = this.loginForm.get('password').value;
    this.authenticationService.initSession(this.user);
    setTimeout(() => {
      if (this.isAuth() === false) {
        this.message = true;
        this.authenticating = false;
      }
    }, 2000);
  }

  isAuth() {
    return this.authenticationService.isAuthenticated();
  }

}
