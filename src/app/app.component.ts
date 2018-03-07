import { Component, OnInit } from '@angular/core';
import { FormModel } from './vg-form-generator';
import { ContentContainerModel } from './vg-form-generator/models/containers/ContentContainer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formModel: FormModel;
  ngOnInit() {
    this.formModel = new FormModel();
    this.formModel.entry = new ContentContainerModel();
    this.formModel.entry.id = 'Test';
    this.formModel.entry.label = 'Test Label';
  }
}
