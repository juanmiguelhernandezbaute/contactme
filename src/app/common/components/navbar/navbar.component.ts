import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../modules/authentication/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: string;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = '';
  }

  isAuth() {
    if (this.authenticationService.isAuthenticated()) {
      this.user = this.authenticationService.getUser().email;
      return true;
    } else {
      return false;
    }
  }

  onLogout() {
    this.authenticationService.logOut();
    this.user = '';
    this.router.navigate(['/login']);
  }

}
