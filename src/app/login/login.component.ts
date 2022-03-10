import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BlogauthService} from "../service/blogauth.service";
import {Router} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {ViewObserverService} from "../view-observer.service";
import { TokenStorageService } from '../service/token-storage.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(HeaderComponent) child;
  loginForm: FormGroup;
  message = "";
  loginAttempts = 0;

  constructor(private fb: FormBuilder, private blogauthService: BlogauthService ,private route:Router,private dataService: ViewObserverService , private storageServcie :TokenStorageService) {

    this.loginForm = this.fb.group({
      'usernameOrEmail': ['', Validators.required],
      'password': ['', Validators.required],

    });

  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.loginAttempts == 3) {
      this.message = "Too many invalid attempts "
      return
    }
    const credentials = this.loginForm.value;
   this.blogauthService.login(credentials).subscribe(data => {
      console.log("signUpData:"+data?.tokenType+"Success:"+data?.success)
     var isUserExist = data?.success;
     if (isUserExist) {
      this.message = "Successfully Logged in"

      localStorage.setItem("userExist",data.userName);


      localStorage.setItem('currentUser', JSON.stringify(data.user));


      this.storageServcie.saveToken(data.accessToken)

      this.dataService.notifyAboutChange();

      setTimeout(()=>{
    
        this.route.navigate(['/dashboard']);
    
      } ,1500)
    
    } else {
      this.loginAttempts += 1
      this.message = "invalid credentials"
    }
},(err:any) => {

  this.message = err
   console.log("signUpDataError:"+err.message)

 }
 );

  // ngOnInit(): void {
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  // }
 
  }
}
