import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BlogauthService} from "../service/blogauth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginForm: FormGroup;
  message = "";
  loginAttempts = 0;

  constructor(private fb: FormBuilder, private blogauthService: BlogauthService ,private route:Router) {

    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'username': ['', Validators.required],
      'password': ['', Validators.required],

    });
  }
  onSubmit() {
    if (this.loginAttempts == 3) {
      this.message = "Too many invalid attempts "
      return
    }
    const credentials = this.loginForm.value;
  this.blogauthService.signUp(credentials).subscribe(data => {
      console.log("signUpData:"+data?.message)
     var isUserExist= data?.success;
      if (isUserExist) {
        localStorage.setItem("accessToken",data.accessToken);
        this.message = "Successfully Logged in"
        //  window.location.reload();
        setTimeout(()=>{
  
          this.route.navigate(['/login']);
  
        } ,1500)
  
      } else {
       this.message ="User Already exist"
      }

  }
  ,(err:any) => {
   this.message = err
    console.log("signUpDataError:"+err.message)
  }
  );
  
  }

  ngOnInit(): void {
  }

}
