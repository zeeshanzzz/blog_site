import { Component, OnInit } from '@angular/core';
import {BlogServiceService} from "../service/blog-service.service";
import {BlogauthService} from "../service/blogauth.service";

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent implements OnInit {
  userBlogs: any;
  currentUser="";
  isUserExist=false;
  constructor(private blogServiceService:BlogServiceService,private blogauthService:BlogauthService) { }

  ngOnInit(): void {
    this.showAllBlogs()
  }
  showAllBlogs(){
    this.userBlogs = this.blogServiceService.getBlogs().sort()
    this.isUserExist= this.blogauthService.isUserExist()
    if(this.isUserExist){
      this.currentUser = this.blogauthService.getUserName()!
    }
  }

}
