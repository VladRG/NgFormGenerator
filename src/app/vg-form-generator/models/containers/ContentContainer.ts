import { ContainerModelBase } from './ContainerBase';
import { ContainerType } from './ContainerType.enum';
import { FormComponent } from './../FormComponent';

export class ContentContainerModel extends ContainerModelBase {
  constructor() {
    super();
    this.children = new Array<FormComponent>();
  }
  type: ContainerType = ContainerType.CONTAINER;
}
