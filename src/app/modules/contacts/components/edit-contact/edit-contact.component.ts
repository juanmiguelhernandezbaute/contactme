import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Contact } from '../../models/contact';

import { ContactsService } from '../../services/contacts.service';
import { AuthenticationService } from '../../../authentication/services/authentication.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactForm: FormGroup;
  contact: Contact;
  contacts: Contact[] = [];
  id: string;

  constructor(private cf: FormBuilder,
    private contactsService: ContactsService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params
      .subscribe(parameters => {
        this.id = parameters['id'];
        this.contactsService.getContact(this.id)
          .subscribe(contact => this.contact = contact);
      });

    this.contactsService.getContacts()
      .subscribe(contacts => {
        for (const id$ of Object.keys(contacts)) {
          const s = contacts[id$];
          s.id$ = id$;
          this.contacts.push(contacts[id$]);
        }
      });
  }

  ngOnInit() {
    this.contactForm = this.cf.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required]
    });
  }

  onSubmit() {
    this.contact = this.saveContact();
    this.contactsService.putContact(this.contact, this.id)
      .subscribe(newCourse => {
      });
    this.contactForm.reset();
  }

  saveContact() {
    const contact: Contact = {
      firstName: this.contactForm.get('firstName').value,
      lastName: this.contactForm.get('lastName').value,
      telephone: this.contactForm.get('telephone').value,
      email: this.contactForm.get('email').value,
      user: this.authenticationService.getUser().uid.toString()
    };
    return contact;
  }

}
