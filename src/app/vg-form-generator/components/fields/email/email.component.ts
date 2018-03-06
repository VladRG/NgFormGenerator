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
}
