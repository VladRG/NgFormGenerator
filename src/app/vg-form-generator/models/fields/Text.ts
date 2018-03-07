import { FieldModelBase } from './FieldBase';
import { FieldType } from './FieldType.enum';

export class TextInputModel extends FieldModelBase {
  type: FieldType = FieldType.TEXT;
}
