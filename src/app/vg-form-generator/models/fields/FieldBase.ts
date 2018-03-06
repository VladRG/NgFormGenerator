import { FieldType } from './FieldType.enum';
import { IFormComponent } from '../IFormComponent';

export class FieldModelBase implements IFormComponent {
  id: string;
  type: FieldType;
  label: string;
  name: string;
  helpText: string;
}
