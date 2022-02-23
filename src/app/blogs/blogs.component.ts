import { Component, OnInit } from '@angular/core';
import {BlogServiceService} from "../service/blog-service.service";
import {BlogauthService} from "../service/blogauth.service";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

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
