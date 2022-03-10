import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { User } from '../model/user';
import { BlogauthService } from './blogauth.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuardService implements CanActivate {
  currentUser!: User;
  constructor(public auth: BlogauthService, public router: Router,private authService:BlogauthService) {
    this.authService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }
  canActivate(): boolean {
    if (!this.auth.isUserExist()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}