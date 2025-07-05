import { AppConstants } from '../constants/app.constants';

export class Instagram {
  public static openInstagram() {
    window.location.href = AppConstants.INSTAGRAM;
  }
}
