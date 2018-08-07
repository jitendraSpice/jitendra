import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { GOTCharacterComponent } from './gotcharacter/gotcharacter.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { AppBoldDirective } from './app-bold.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { Routes,RouterModule } from "@angular/router";
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ListComponent } from './list/list.component';
import { environment } from './../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {HttpClientModule} from '@angular/common/http';
import {Authservice} from './auth/auth-service'
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { HomechildrenComponent } from './homechildren/homechildren.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {DataStorageService} from './data-storage.service';
import { HttpModule } from '@angular/http';
const ROUTES:Routes=[
  {path:'',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'blog',component:BlogComponent},
  {path:'about',component:AboutComponent},
  {path:'form',component:TemplateDrivenComponent},
  {path:'Reactive',component:ReactiveFormComponent},
  {path:'List',component:ListComponent},
  {path:'signin',component:SigninComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    GOTCharacterComponent,
    DirectiveExampleComponent,
    AppBoldDirective,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    ListComponent,
    HomechildrenComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [Authservice,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
