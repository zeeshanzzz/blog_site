import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BlogauthService} from "../service/blogauth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message = "";
  loginAttempts = 0;

  constructor(private fb: FormBuilder, private blogauthService: BlogauthService) {

    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],

    });

  }

  onSubmit() {
    if (this.loginAttempts == 3) {
      this.message = "Too many invalid attempts "
      return
    }
    const credentials = this.loginForm.value;
    var isUserExist = this.blogauthService.login(credentials)
    if (isUserExist) {
      this.message = "Successfully Logged in"
    } else {
      this.loginAttempts += 1
      this.message = "invalid credentials"
    }
  }

  // ngOnInit(): void {
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  // }
  ngOnInit(): void {
  }
}
