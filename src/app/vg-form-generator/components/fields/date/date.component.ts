import { Component, Injector, Input } from '@angular/core';
import { FieldModelBase } from '../../../models';

@Component({
  selector: 'vg-form-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.html']
})

export class VgDateComponent {
  constructor(private injector: Injector) {
    this.model = injector.get('model');
  }

  @Input()
  model: FieldModelBase;

}
