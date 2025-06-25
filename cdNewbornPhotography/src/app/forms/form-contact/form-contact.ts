import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-form-contact',
  templateUrl: './form-contact.html',
  styleUrl: './form-contact.scss',
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormContact {
  email = 'deleon.a.candace@gmail.com';
  contactForm = new FormGroup({
    fullName: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    cityTown: new FormControl(''),
    birthDate: new FormControl(''),
    typeOfSession: new FormControl(''),
    message: new FormControl(''),
  });

  onSubmit() {
    console.log(JSON.stringify(this.contactForm.value));
    const subject = 'Newborn Photography Session';
    const body = JSON.stringify(this.contactForm.value);
    const mailtoLink = `mailto:${this.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // window.location.href = mailtoLink;
  }
}
