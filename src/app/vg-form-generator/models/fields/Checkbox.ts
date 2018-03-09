import { FieldModelBase } from './FieldBase';
import { FieldType } from './FieldType.enum';

export class CheckboxModel extends FieldModelBase {
  type: FieldType = FieldType.CHECKBOX;
  value: boolean;
}
