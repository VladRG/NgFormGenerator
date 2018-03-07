import { FormComponent } from './../FormComponent';
import { FieldModelBase } from './FieldBase';
import { FieldType } from './FieldType.enum';

export class SelectModel extends FieldModelBase {
  constructor() {
    super();
    this.options = new Array<SelectOption>();
  }
  type: FieldType = FieldType.SELECT;
  value = '';
  options?: Array<SelectOption>;
}

export class SelectOption {
  value: any;
  text: string;
}

