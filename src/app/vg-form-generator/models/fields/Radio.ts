import { FieldModelBase } from './FieldBase';
import { FieldType } from './FieldType.enum';

export class RadioModel extends FieldModelBase {
  type: FieldType = FieldType.RADIO;
}
