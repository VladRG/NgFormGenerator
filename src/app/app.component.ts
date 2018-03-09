import { Component, OnInit } from '@angular/core';
import {
  FormModel,
  TextInputModel,
  PasswordInputModel,
  TabsContainer,
  HtmlContainerModel,
  DateModel,
  DateTimeModel,
  RadioModel,
  CheckboxModel
} from './vg-form-generator';
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
    const myContainer = new ContentContainerModel();
    myContainer.id = 'Test';
    myContainer.label = 'Test Label';

    const tabContainer = new TabsContainer();
    tabContainer.name = 'tab-container';
    tabContainer.label = 'tabContainer';

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

    const container = new ContentContainerModel();
    container.label = 'Custom Container 2';
    container.id = 'container-id';
    container.children.push(password);

    const textInput = new TextInputModel();
    textInput.required = true;
    textInput.placeholder = 'Your name here';

    myContainer.children.push(textInput);
    const htmlContainer = new HtmlContainerModel();
    htmlContainer.label = 'HTML';
    htmlContainer.html = '<h4>HelloWorld</h4><p>Hey</p>';
    container.children.push(htmlContainer);

    const date = new DateModel();
    date.label = 'My Date';
    date.required = true;
    date.placeholder = 'my date';
    myContainer.children.push(date);

    const datetime = new DateTimeModel();
    datetime.label = 'My Date t';
    datetime.required = true;
    datetime.placeholder = 'my date t';
    myContainer.children.push(datetime);

    const radio = new RadioModel();
    radio.helpText = 'My Radio Help Text';
    radio.name = 'Name';
    radio.label = 'Radio Button label';
    container.children.push(radio);
    radio.id = 'myRadio';

    const checkbox = new CheckboxModel();
    checkbox.helpText = 'My Radio Help Text';
    checkbox.name = 'Checkbox';
    checkbox.label = 'Radio Button label';
    checkbox.id = 'mycheckbox';
    container.children.push(checkbox);


    this.formModel.entry = tabContainer;
    this.formModel.entry.children.push(myContainer);
    this.formModel.entry.children.push(container);
  }
}
