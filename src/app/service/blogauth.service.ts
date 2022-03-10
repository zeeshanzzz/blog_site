import {Injectable, Optional, SkipSelf} from '@angular/core';
import { environment } from 'src/environments/environment';
import {Authmodel} from "../model/authmodel.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Loginmodel } from '../model/loginmodel.model';
import { User } from '../model/user';
import { TokenStorageService } from './token-storage.service';
import { Role } from '../model/role';


@Injectable({
  providedIn: 'root'
})
export class BlogauthService {
   apiUrl:string= environment.apiUrl;
   errorMessage = "";
   public currentUser!: Observable<User>;
  private currentUserSubject! : BehaviorSubject<User>;

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
//    isAdmin() {
//     return this.isUserExist() && currentUser().role === Role.Admin;
// }

  constructor(@Optional() @SkipSelf() blogauthService:BlogauthService ,private http: HttpClient,private tokenService:TokenStorageService) {
    if(blogauthService){
      throw  new Error("Service Already here")
    }
    console.info("Auht service created")
    this.currentUserSubject = new BehaviorSubject<User> (JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();

  }
  isAuthorized(allowedRoles: Role[]): boolean {
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }
    const currentUser = this.tokenService.getUser()

    return allowedRoles.includes(currentUser.roles[0]);
  }

  logout() {
    this.currentUserSubject.next(null!);
    localStorage.removeItem('userExist');
    localStorage.removeItem('accessToken');
    // this.router.navigate(['']);
  }
isUserExist(){
    return  localStorage.getItem("userExist")!==null;

}
  getUserName(){
    return  localStorage.getItem("userExist")

  }
  login(authModel: Loginmodel) {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const body=JSON.stringify(authModel);
    console.log("authdata:"+JSON.stringify(this.userAuth))
    return  this.http.post<any>(`${this.apiUrl}auth/signin`, body ,config).pipe(
      map(response => {
        if(response) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
        return response;
      })
    );
//  var isUserExist=  this.userAuth.some(value => value.email == authModel.email && value.password == authModel.password);
//     console.log("userExist:"+isUserExist)
//     if(isUserExist) {
//       localStorage.setItem("userExist",authModel.email);
//     }
//     return isUserExist

    //   this.userAuth.forEach((item) => {
    //     if(item.email == authModel.email && item.password == authModel.password) return true
    //   );
    //
    // }
  }
  signUp(authModel: Authmodel) {
    var isUserExist=false;
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const body=JSON.stringify(authModel);
   return this.http.post<any>(`${this.apiUrl}auth/signup`, body ,config)


  }
}
