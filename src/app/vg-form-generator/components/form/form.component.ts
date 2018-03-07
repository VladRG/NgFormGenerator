import { Component, Input, ViewChild } from '@angular/core';
import { FormModel } from './../../models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'vg-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class VgFormComponent {
  @ViewChild(NgForm) vgForm: NgForm;

  @Input()
  model: FormModel;

  submit() {
    console.log(this.model);
  }

  isFormValid() {
    return this.vgForm ? this.vgForm.valid : false;
  }
}
