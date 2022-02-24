import { Component, OnInit } from '@angular/core';
import {BlogServiceService} from "../service/blog-service.service";
import {BlogauthService} from "../service/blogauth.service";

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent implements OnInit {
  filteredBlogs:any = []
  userBlogs: any;
  currentUser="";
  isUserExist=false;
  constructor(private blogServiceService:BlogServiceService,private blogauthService:BlogauthService) { }
  public search:string = "";

  public searchBlogs():void{
    console.log(this.search);
    this.filteredBlogs = this.userBlogs.filter(s => s.title.toLowerCase().includes(this.search.toLowerCase()));
    // console.log(this.search);
  }
  ngOnInit(): void {
    this.showAllBlogs()
    this.filteredBlogs = this.userBlogs;
  }
  showAllBlogs(){
    this.userBlogs = this.blogServiceService.getBlogs().sort()
    this.isUserExist= this.blogauthService.isUserExist()
    if(this.isUserExist){
      this.currentUser = this.blogauthService.getUserName()!
    }
  }

}
