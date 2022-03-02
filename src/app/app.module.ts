import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import {NgxEditorModule} from "ngx-editor";
import {NgPipesModule} from 'ngx-pipes';
import { SignupComponent } from './signup/signup.component';
import {BlogauthService} from "./service/blogauth.service";
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    DashbaordComponent,
    AboutUsComponent,
    BlogsComponent,
    FooterComponent,
    ContactComponent,
    PostDetailComponent,
    CreateBlogComponent,
    SignupComponent,
    SearchFilterPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        NgxEditorModule,
        NgPipesModule,
        FormsModule
    ],
  providers: [BlogauthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
