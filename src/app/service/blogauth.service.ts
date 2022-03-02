import {Injectable, Optional, SkipSelf} from '@angular/core';
import {Authmodel} from "../model/authmodel.model";


@Injectable({
  providedIn: 'root'
})
export class BlogauthService {
  userAuth = [
    {
      email: "zee@gmail.com",
      name: "zee",
      designation: "Writer",
      phone: "434324324",
      password: "zee123"

    }
    , {
      email: "test@gmail.com",
      name: "test",
      designation: "Auhor",
      phone: "123456",
      password: "test123"

    }
  ];

  constructor(@Optional() @SkipSelf() blogauthService:BlogauthService) {
    if(blogauthService){
      throw  new Error("Service Already here")
    }
    console.info("Auht service created")

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
    console.log("authdata:"+JSON.stringify(this.userAuth))
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
  signUp(authModel: Authmodel) {
    var isUserExist=  this.userAuth.some(value => value.email == authModel.email && value.password == authModel.password);
    console.log("userExist:"+isUserExist)
    if(isUserExist) {
      return false;
    }
    else{
    var  authData ={
        email: authModel.email,
        name: authModel.name,
        designation: authModel.designation,
        phone: authModel.phone,
        password: authModel.password

      }
      this.userAuth.push(authData)
      return true;
    }

    //   this.userAuth.forEach((item) => {
    //     if(item.email == authModel.email && item.password == authModel.password) return true
    //   );
    //
    // }
  }
}
