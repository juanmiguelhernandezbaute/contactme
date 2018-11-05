import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  loading = true;

  constructor(private contactsService: ContactsService) {
    this.loading = false;
  }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

}
