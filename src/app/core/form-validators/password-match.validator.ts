import { FormGroup } from '@angular/forms';

export function PasswordMatch(group: FormGroup) {

  let password, confirmPassword, form;

  form = group;
  password = form.get('password');
  confirmPassword = form.get('confirmPassword');

  if (group.untouched) {
    return null;
  }

  return (password === confirmPassword) ? null : { passwordMatch: true };

}
