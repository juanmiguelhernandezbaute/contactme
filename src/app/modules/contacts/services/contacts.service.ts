import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/RX';

import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contactsURL = 'https://contactme-7c67b.firebaseio.com/contacts.json';
  contactURL = 'https://contactme-7c67b.firebaseio.com/contacts';

  contacts: Contact[] = [
    {
      firstName: 'Juan',
      lastName: 'Hernández',
      telephone: '666112233',
      email: 'juanhernandez@gmail.com',
    },
    {
      firstName: 'Pedro',
      lastName: 'Pérez',
      telephone: '666332211',
      email: 'pedroperez@gmail.com',
    }
  ];

  constructor(private http: Http) {}

  postContact(student: any) {
    const newStudent = JSON.stringify(student);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.contactsURL, newStudent, {headers})
      .map( response => {
        console.log(response.json());
        return response.json();
      });
  }

  getContacts() {
    return this.contacts;
  }
}
