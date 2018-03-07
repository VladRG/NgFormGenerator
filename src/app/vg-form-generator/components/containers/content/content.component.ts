import { Component, Input, OnInit, Injector } from '@angular/core';
import { ContentContainerModel } from '../../../models/containers/ContentContainer';
import { FieldTypes, FormComponent } from '../../../models';

@Component({
  selector: 'vg-content-container',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class VgContentContainerComponent {
  constructor(injector: Injector) {
    this.model = injector.get('model');
  }

  @Input()
  model: ContentContainerModel;

  isField(component: FormComponent): boolean {
    return FieldTypes.indexOf(component.type) >= 0;
  }

  isContainer(component: FormComponent) {
    return !this.isField(component);
  }
}
