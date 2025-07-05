import { AppConstants } from '../constants/app.constants';

export class Email {
  public static mailTo(
    body = '',
    email = AppConstants.EMAIL,
    subject = AppConstants.EMAIL_SUBJECT
  ) {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }
}
