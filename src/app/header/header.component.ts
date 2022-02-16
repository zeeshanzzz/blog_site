import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data="";
  allBlogs="";
  allPosts="";
  blogForm: FormGroup;
  count = false;
  show = false;
  message="";
  menu : boolean = false;
  constructor( private fb: FormBuilder

  ) {
    this.blogForm = this.fb.group({
      'title': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'content': ['', Validators.required],
      'blogImage': ['', [Validators.required]],
    });
  }

  //to add new blog
  addNewBlog() {
    this.show = false;
    this.count = true;
  }
  toggleMenu()
  {
    this.menu = !this.menu;
  }
  //getting all blogs' data

  viewAllBlogs() {
    this.count = false;
    this.show = true;
    // this.cosmicService.showAllBlogs()
    //
    //   .subscribe(res => {
    //
    //     this.data = res;
    //     var jsondata = JSON.parse(this.data._body);
    //     this.allBlogs = jsondata.objects;
    //   })
  }
  //view Blogs of logged in user
  viewBlogs() {
    this.count = false;
    this.show = true;

    // this.cosmicService.showBlogs()
    //
    //   .subscribe(res => {
    //     this.data = res;
    //     var jsondata = JSON.parse(this.data._body);
    //     this.allBlogs = jsondata.objects;
    //
    //   })
  }
  //logging user out
  logout() {
    localStorage.removeItem('user');
    // this.router.navigate(['']);
  }

  submitForm() {

    const data = this.blogForm.value;

    // this.cosmicService.addBlog(data)
    //
    //   .subscribe(res => {
    //     console.log(res);
    //     this.message = "Blog added successfully";
    //   })
  }

  // hitId()
  // {
  //   this.cosmicService.hitId()

  //     .subscribe(res => {
  //       console.log(res);

  //     })
  // }

  ngOnInit() {

  }


}
