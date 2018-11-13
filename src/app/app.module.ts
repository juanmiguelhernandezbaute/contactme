import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { HomeComponent } from './common/components/home/home.component';

import { ContactsService } from './modules/contacts/services/contacts.service';
import { AuthenticationService } from './modules/authentication/services/authentication.service';

import { AuthenticationModule } from './modules/authentication/authentication.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { ErrorPageComponent } from './common/components/error-page/error-page.component';
import { GenericErrorPageComponent } from './common/components/generic-error-page/generic-error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ErrorPageComponent,
    GenericErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AuthenticationModule,
    ContactsModule
  ],
  providers: [
    AuthenticationService,
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
