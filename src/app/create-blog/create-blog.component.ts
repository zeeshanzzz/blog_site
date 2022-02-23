import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BlogServiceService} from "../service/blog-service.service";

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  message: any;
  blogForm: FormGroup;
  postId:any;
  isFromEdit =false
  id=""

  constructor(private router: ActivatedRoute,private route: Router,private fb: FormBuilder,private blogServiceService:BlogServiceService) {
    this.blogForm = this.fb.group({
      'title': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'content': ['', Validators.required],
      'blogImage': ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.postId = this.router.snapshot.queryParamMap;
    if(this.postId.params.post_id !=null){
      this.isFromEdit = true;
    }
  }

  submitForm() {
    if(this.isFromEdit){
      const data = this.blogForm.value;
      var tempId = this.postId.params.post_id;
      this.blogServiceService.updateBlogData(data,tempId)
    }else {
      const data = this.blogForm.value;

      this.blogServiceService.saveBlog(data)
    }
    setTimeout(()=>{
      this.route.navigate(['/dashboard']);
    } ,1000)


  }
}
