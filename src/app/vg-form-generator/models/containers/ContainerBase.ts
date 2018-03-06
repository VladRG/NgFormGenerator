import { ContainerType } from './ContainerType.enum';
import { IFormComponent } from '../IFormComponent';

export class ContainerModelBase implements IFormComponent {
  public id: string;
  public type: ContainerType;
  public label: string;
  public children: Array<IFormComponent>;
}
