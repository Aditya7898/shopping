import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, } from 'angularfire2/database';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router){
         
       authService.user$.subscribe(user =>{
          if(user) {
            userService.save(user);

           let returnUrl = localStorage.getItem('returnUrl');
           if(returnUrl){
             localStorage.removeItem('returnUrl');
             this.router.navigateByUrl(returnUrl);
           }
      }
    });
  }
}
