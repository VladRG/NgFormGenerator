import { Component, Input } from '@angular/core';
import { PasswordInputModel } from '../../../models';

@Component({
  selector: 'vg-form-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class VgEmailComponent {
  @Input()
  model: PasswordInputModel;

  emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}
