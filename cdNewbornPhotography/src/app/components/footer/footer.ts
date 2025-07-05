import { Component } from '@angular/core';
import { AppConstants } from '../../shared/constants/app.constants';
import { Email } from '../../shared/contacts/email';
import { Instagram } from '../../shared/contacts/instagram';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  appConstants = AppConstants;
  year = new Date().getFullYear();
  instagram = Instagram
  email = Email
}
