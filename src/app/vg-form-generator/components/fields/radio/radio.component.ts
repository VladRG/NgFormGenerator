import { Component, Injector, Input } from '@angular/core';
import { FieldModelBase } from '../../../models';

@Component({
  selector: 'vg-form-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})

export class VgRadioComponent {
  constructor(private injector: Injector) {
    this.model = injector.get('model');
  }

  @Input()
  model: FieldModelBase;

}
