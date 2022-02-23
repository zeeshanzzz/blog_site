import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BlogServiceService} from "../service/blog-service.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  postId:any;
  allPosts:any;
  singlePost: any;
  constructor(private router: ActivatedRoute, private route: Router,private blogServiceService:BlogServiceService) { }

  ngOnInit(): void {
    this.postId = this.router.snapshot.queryParamMap;
    console.log("postId:"+this.postId)
    this.getPostById();
  }
getPostById(){
  var data = this.postId.params.post_id;
 this.singlePost= this.blogServiceService.getPost(data)

}


  onDashboardClick() {
    this.route.navigate(['dashboard'])
  }
}
