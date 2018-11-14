import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../../services/contacts.service';
import { AuthenticationService } from '../../../authentication/services/authentication.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [];
  loading = true;

  contactSelected: any;

  contactos: any;

  constructor(private contactsService: ContactsService,
    private authenticationService: AuthenticationService) {
    this.contactsService.getContactsByUser(this.authenticationService.getUser().uid.toString())
      .subscribe(contacts => {
        // tslint:disable-next-line:forin
        for (const id$ in contacts) {
          const c = contacts[id$];
          c.id$ = id$;
          this.contacts.push(contacts[id$]);
        }
        this.loading = false;
      });
  }

  ngOnInit() {
  }

  selectContact(id$) {
    this.contactSelected = id$;
  }

  deleteContact() {
    this.contactsService.delContact(this.contactSelected)
      .subscribe( response => {
        this.contacts = [];
        this.contactsService.getContacts()
          .subscribe(contacts => {
            // tslint:disable-next-line:forin
            for (const id$ in contacts) {
              const s = contacts[id$];
              s.id$ = id$;
              this.contacts.push(contacts[id$]);
            }
          });
      });
  }

}
