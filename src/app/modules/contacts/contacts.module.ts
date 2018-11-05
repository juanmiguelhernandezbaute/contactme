import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular-6-datatable';

import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DataTableModule
  ],
  declarations: [
    ContactsComponent,
    AddContactComponent
  ]
})
export class ContactsModule { }
