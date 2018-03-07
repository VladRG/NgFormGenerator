import { Component, Input } from '@angular/core';
import { FormModel } from './../../models';

@Component({
  selector: 'vg-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class VgFormComponent {
  @Input()
  model: FormModel;

}
