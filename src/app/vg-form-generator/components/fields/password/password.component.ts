import { Component, Input } from '@angular/core';
import { PasswordInputModel } from '../../../models';

@Component({
  selector: 'vg-form-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class VgPasswordComponent {
  @Input()
  model: PasswordInputModel;
}
