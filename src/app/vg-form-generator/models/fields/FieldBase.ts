import { FieldType } from './FieldType.enum';
import { FormComponent } from '../FormComponent';

export class FieldModelBase extends FormComponent {
  type: FieldType;
  helpText: string;
  placeholder: string;
  value: any = '';
  required?: boolean;
  pattern?: RegExp;
  validationMessage?: string;
}
