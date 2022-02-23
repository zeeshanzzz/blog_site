import { Component } from '@angular/core';
import {BlogServiceService} from "./service/blog-service.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog_site';
  constructor(private blogauthService: BlogServiceService) {
  }
  ngOnInit(): void {

    this.blogauthService.saveBlogs();

  }
}
