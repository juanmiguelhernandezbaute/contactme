import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './common/components/home/home.component';
import { ContactsComponent } from './modules/contacts/components/contacts/contacts.component';

import { ContactsService } from './modules/contacts/services/contacts.service';
import { NavbarComponent } from './common/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
