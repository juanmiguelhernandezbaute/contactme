import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = [
    { UID: '1',
      firstName: 'Juan',
      lastName: 'Hernández',
      telephone: '666112233',
      email: 'juanhernandez@gmail.com',
    },
    { UID: '2',
      firstName: 'Pedro',
      lastName: 'Pérez',
      telephone: '666332211',
      email: 'pedroperez@gmail.com',
    }
  ];

  constructor() {}

  getContacts() {
    return this.contacts;
  }
}
