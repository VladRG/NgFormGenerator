import { Component, Injector, Input } from '@angular/core';
import { HtmlContainerModel } from './../../../models';

@Component({
  selector: 'vg-form-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class VgHtmlContainerComponent {
  constructor(private injector: Injector) {
    this.model = injector.get('model');
  }

  @Input()
  model: HtmlContainerModel;
}
