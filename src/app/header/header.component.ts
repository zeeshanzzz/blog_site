import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BlogauthService} from "../service/blogauth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ViewObserverService} from "../view-observer.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy {
  notifierSubscription: Subscription = this.dataService.subjectNotifier.subscribe(notified => {
   // window.location.reload();
    this.ngOnInit()
    // originator has notified me. refresh my data here.
  });
  isUserExist=false
  userName:string|null="";
  constructor(private blogauthService:BlogauthService ,private route:Router ,private dataService: ViewObserverService ,private activeRoute: ActivatedRoute
  ) {

  }





  // hitId()
  // {
  //   this.cosmicService.hitId()

  //     .subscribe(res => {
  //       console.log(res);

  //     })
  // }
  Logout="Logout";

  ngOnInit() {
    this.isUserExist = this.blogauthService.isUserExist()
    this.userName =this.blogauthService.getUserName()
  }
  ngOnDestroy() {
    this.notifierSubscription.unsubscribe();
  }

  logout() {
    this.blogauthService.logout()
    window.location.reload();
    this.route.navigate([this.activeRoute.pathFromRoot+'/dashboard']);
    // setTimeout(()=>{
    //
    // } ,300)


  }
}
