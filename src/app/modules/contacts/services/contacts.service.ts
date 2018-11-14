import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/RX';
import * as firebase from 'firebase';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contactsURL = 'https://contactme-7c67b.firebaseio.com/contacts.json';
  contactURL = 'https://contactme-7c67b.firebaseio.com/contacts';

  constructor(private http: Http) {}

  postContact(contact: Contact) {
    const newContact = JSON.stringify(contact);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.contactsURL, newContact, {headers})
      .map( response => {
        console.log(response.json());
        return response.json();
      });
  }

  getContacts() {
    return this.http.get(this.contactsURL)
      .map( response => response.json()
      );
  }

  getContactsByUser(user$: string) {
    const url = `${this.contactsURL}?orderBy="user"&equalTo="${user$}"`;
    return this.http.get(url)
      .map( response => response.json()
    );
  }

  getContact(id$: string) {
    const url = `${this.contactURL}/${id$}.json`;
    return this.http.get(url)
      .map( response => response.json()
    );
  }

  putContact(contact: Contact, id$: string) {
    const newContact = JSON.stringify(contact);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.contactURL}/${id$}.json`;

    return this.http.put(url, newContact, {headers})
      .map( response => {
        console.log(response.json());
        return response.json();
    });
  }

  delContact(id$: string) {
    const url = `${this.contactURL}/${id$}.json`;

    return this.http.delete(url)
      .map( response => response.json());
  }

}
