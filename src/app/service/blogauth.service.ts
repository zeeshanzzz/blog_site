import { Injectable } from '@angular/core';
import {Authmodel} from "../model/authmodel.model";


@Injectable({
  providedIn: 'root'
})
export class BlogauthService {
  userAuth = [
    {
      email: "zee@gmail.com",
      password: "zee123"

    }
    , {
      email: "test@gmail.com",
      password: "test123"

    }
  ];

  constructor() {

  }
  logout() {
    localStorage.removeItem('userExist');
    // this.router.navigate(['']);
  }
isUserExist(){
    return  localStorage.getItem("userExist")!==null;

}
  getUserName(){
    return  localStorage.getItem("userExist")

  }
  login(authModel: Authmodel) {
    console.log("authdata:"+authModel.email)
    console.log("authdata:"+authModel.password)
 var isUserExist=  this.userAuth.some(value => value.email == authModel.email && value.password == authModel.password);
    console.log("userExist:"+isUserExist)
    if(isUserExist) {
      localStorage.setItem("userExist",authModel.email);
    }
    return isUserExist

    //   this.userAuth.forEach((item) => {
    //     if(item.email == authModel.email && item.password == authModel.password) return true
    //   );
    //
    // }
  }
}
