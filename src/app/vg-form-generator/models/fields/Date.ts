import { FieldModelBase } from './FieldBase';
import { FieldType } from './FieldType.enum';

export class DateModel extends FieldModelBase {
  type: FieldType = FieldType.DATE;
  value: Date;
}
