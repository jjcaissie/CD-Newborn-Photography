import { Component } from '@angular/core';
import { FormContact } from '../../forms/form-contact/form-contact';
import { AppConstants } from '../../shared/constants/app.constants';
import { Email } from '../../shared/contacts/email';
import { Instagram } from '../../shared/contacts/instagram';

@Component({
  selector: 'app-page-contact',
  imports: [FormContact],
  templateUrl: './page-contact.html',
  styleUrl: './page-contact.scss',
})
export class PageContact {
  appConstants = AppConstants;
  instagram=Instagram
  email=Email
}
