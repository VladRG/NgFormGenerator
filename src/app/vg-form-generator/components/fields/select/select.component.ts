import { Component, Input, Injector } from '@angular/core';
import { SelectModel } from '../../../models/fields/Select';

@Component({
  selector: 'vg-form-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class VgSelectComponent {
  constructor(private injector: Injector) {
    this.model = injector.get('model');
  }

  @Input()
  model: SelectModel;
}
