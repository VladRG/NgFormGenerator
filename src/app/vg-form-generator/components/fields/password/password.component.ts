import { Component, Input, Injector } from '@angular/core';
import { PasswordInputModel } from '../../../models';

@Component({
  selector: 'vg-form-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class VgPasswordComponent {
  constructor(private injector: Injector) {
    this.model = injector.get('model');
  }
  @Input()
  model: PasswordInputModel;
}
