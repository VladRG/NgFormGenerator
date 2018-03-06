import { FieldType } from './FieldType.enum';
import { IFormComponent } from '../IFormComponent';
import { ValidationModel } from './Validation';

export class FieldModelBase implements IFormComponent {
  id: string;
  type: FieldType;
  label: string;
  name: string;
  helpText: string;
  placeholder: string;
  validation: ValidationModel;
}
