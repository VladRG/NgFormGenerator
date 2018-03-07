import { FieldModelBase } from './FieldBase';
import { FieldType } from './FieldType.enum';

export class PasswordInputModel extends FieldModelBase {
  type: FieldType = FieldType.PASSWORD;
}
