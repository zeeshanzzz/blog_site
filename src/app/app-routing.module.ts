import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashbaordComponent} from "./dashbaord/dashbaord.component";
import {BlogsComponent} from "./blogs/blogs.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactComponent} from "./contact/contact.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {CreateBlogComponent} from "./create-blog/create-blog.component";

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashbaordComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard/postdetails', component: PostDetailComponent },
  { path: 'postdetails', component: PostDetailComponent },
  { path: 'creteBlog', component: CreateBlogComponent },
  { path: 'dashboard/creteBlog', component: CreateBlogComponent },
  { path: '', component: DashbaordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
