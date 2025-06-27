import { Component } from '@angular/core';
import { FormContact } from '../../forms/form-contact/form-contact';

@Component({
  selector: 'app-page-contact',
  imports: [FormContact],
  templateUrl: './page-contact.html',
  styleUrl: './page-contact.scss',
})
export class PageContact {
  accountName = 'cdnewbornphotography';
  email = this.accountName + '@gmail.com';
  instagramLink = 'https://www.instagram.com/' + this.accountName;
}
