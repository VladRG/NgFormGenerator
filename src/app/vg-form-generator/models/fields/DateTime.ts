import { FieldModelBase } from './FieldBase';
import { FieldType } from './FieldType.enum';

export class DateTimeModel extends FieldModelBase {
  type: FieldType = FieldType.DATETIME;
  value: Date;
}
