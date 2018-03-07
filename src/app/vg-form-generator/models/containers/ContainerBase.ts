import { ContainerType } from './ContainerType.enum';
import { FormComponent } from '../FormComponent';

export class ContainerModelBase extends FormComponent {
  constructor() {
    super();
    this.children = new Array<FormComponent>();
  }
  public type: ContainerType;
  public children: Array<FormComponent>;
}
