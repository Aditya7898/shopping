import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';
import { AppUser } from '../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  appUser: AppUser;
  constructor(private authService: AuthService) {
    authService.appUser$.subscribe(appUser => this.appUser= appUser);
   }

  logout(){
    this.authService.logout();
  }
}
