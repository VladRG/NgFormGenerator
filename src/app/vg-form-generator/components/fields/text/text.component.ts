import { Component, Input } from '@angular/core';
import { TextInputModel } from '../../../models';

@Component({
  selector: 'vg-form-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class VgTextComponent {
  @Input()
  model: TextInputModel;
}
