import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../models/user';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user: User = new User();

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9\d$@$!%*?&.]+)$'),
        Validators.minLength(8)
      ]]
    });

    // this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));
    // this.onValueChanged();
  }

  // onValueChanged(data?: any) {
  //   if (!this.registerForm) {
  //     return;
  //   }
  //   const form = this.registerForm;

  //   // tslint:disable-next-line:forin
  //   for (const field in this.errorsForm) {
  //     this.errorsForm[field] = '';
  //     const control = form.get(field);

  //     if (control && control.dirty && !control.valid) {
  //       const messages = this.validationMessages[field];

  //       // tslint:disable-next-line:forin
  //       for (const key in control.errors) {
  //         this.errorsForm[field] += messages[key] + ' ';
  //       }
  //     }
  //   }
  // }

  onSubmit() {
    this.user.email = this.registerForm.get('email').value;
    this.user.password = this.registerForm.get('password').value;
    this.authenticationService.registerUser(this.user);
    this.router.navigate(['/home']);
  }

}
