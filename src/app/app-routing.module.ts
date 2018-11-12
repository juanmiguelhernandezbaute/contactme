import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/authentication/components/login/login.component';
import { RegisterComponent } from './modules/authentication/components/register/register.component';
import { HomeComponent } from './common/components/home/home.component';
import { ContactsComponent } from './modules/contacts/components/contacts/contacts.component';
import { AddContactComponent } from './modules/contacts/components/add-contact/add-contact.component';
import { EditContactComponent } from './modules/contacts/components/edit-contact/edit-contact.component';

import { GuardService } from './modules/authentication/services/guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [GuardService] },
  { path: 'contacts', component: ContactsComponent, canActivate: [GuardService] },
  { path: 'addContact', component: AddContactComponent, canActivate: [GuardService] },
  { path: 'editContact/:id', component: EditContactComponent, canActivate: [GuardService] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {}
