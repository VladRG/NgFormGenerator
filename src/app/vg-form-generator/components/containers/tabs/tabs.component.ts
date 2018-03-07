import { Component, Injector, Input, ViewEncapsulation } from '@angular/core';
import { TabsContainer, FormComponent } from '../../../models';

@Component({
  selector: 'vg-form-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VgTabsContainerComponent {
  constructor(private injector: Injector) {
    this.model = injector.get('model');
    this.selected = this.model.children[0].id;
  }

  @Input()
  model: TabsContainer;

  selected: string;

  selectChild(component: FormComponent) {
    this.selected = component.id;
  }
}
