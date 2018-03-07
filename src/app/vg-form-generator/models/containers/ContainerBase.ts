import { ContainerType } from './ContainerType.enum';
import { FormComponent } from '../FormComponent';

export class ContainerModelBase extends FormComponent {
  public type: ContainerType;
  public children: Array<FormComponent>;
}
