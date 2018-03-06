import {
  Injectable
} from '@angular/core';
import { FormModel } from '../models/Form';

@Injectable()
export class VgDeserializationService {
  deserializeForm(json: any): FormModel {
    return null;
  }

  serializeForm(formModel: FormModel): any {
    return null;
  }
}
