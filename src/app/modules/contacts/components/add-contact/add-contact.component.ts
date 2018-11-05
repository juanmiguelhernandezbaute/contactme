import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Contact } from '../../models/contact';

import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contactForm: FormGroup;
  contact: Contact;
  contacts: Contact[] = [];

  constructor(private cf: FormBuilder,
              private contactsService: ContactsService) { }

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
    this.contactsService.postContact(this.contact)
      .subscribe(newStudent => {

      });
    this.contactForm.reset();
  }

  saveContact() {
    const contact: Contact = {
      firstName: this.contactForm.get('firstName').value,
      lastName: this.contactForm.get('lastName').value,
      telephone: this.contactForm.get('telephone').value,
      email: this.contactForm.get('email').value
    };

    return contact;
  }

}
