import { Component, Input, Injector } from '@angular/core';
import { TextInputModel } from '../../../models';

@Component({
  selector: 'vg-form-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class VgTextComponent {
  constructor(private injector: Injector) {
    this.model = injector.get('model');
  }

  @Input()
  model: TextInputModel;
}
