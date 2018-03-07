import { FieldModelBase } from './FieldBase';
import { FieldType } from '.';

export class EmailInputModel extends FieldModelBase {
  type: FieldType = FieldType.EMAIL;
}
