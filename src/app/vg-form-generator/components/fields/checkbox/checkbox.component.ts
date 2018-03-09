import { Component, Injector, Input } from '@angular/core';
import { FieldModelBase } from '../../../models';

@Component({
  selector: 'vg-form-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.html']
})

export class VgCheckboxComponent {
  constructor(private injector: Injector) {
    this.model = injector.get('model');
  }

  @Input()
  model: FieldModelBase;

}
