import { Component, Input, OnInit, Injector } from '@angular/core';
import { ContentContainerModel } from '../../../models/containers/ContentContainer';

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
}
