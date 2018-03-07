import { Component, OnInit } from '@angular/core';
import { FormModel, TextInputModel, PasswordInputModel } from './vg-form-generator';
import { ContentContainerModel } from './vg-form-generator/models/containers/ContentContainer';
import { SelectModel, SelectOption } from './vg-form-generator/models/fields/Select';

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

    const select = new SelectModel();
    select.placeholder = 'Placeholder';
    select.label = 'MySelect';
    const option = new SelectOption();
    option.text = 'My Option';
    option.value = 2;
    select.options.push(option);

    const password = new PasswordInputModel();
    password.label = 'Password';
    password.id = 'password-id';
    password.helpText = 'Type a password.';
    password.validationMessage = 'Password is required';
    password.required = true;
    this.formModel.entry.children.push(select);

    const container = new ContentContainerModel();
    container.label = 'Custom Container 2';

    const textInput = new TextInputModel();
    textInput.required = true;
    textInput.placeholder = 'Placeholder';

    this.formModel.entry.children.push(password);
    this.formModel.entry.children.push(container);
    this.formModel.entry.children.push(textInput);
  }
}
