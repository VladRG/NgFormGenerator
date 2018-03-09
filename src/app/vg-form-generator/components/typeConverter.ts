import {
  ContainerTypes,
  ContainerType,
  FieldTypes,
  FieldType,
  FormComponent
} from './../models';
import {
  VgTextComponent,
  VgEmailComponent,
  VgPasswordComponent,
  VgSelectComponent
} from './fields';

import {
  VgContentContainerComponent,
  VgTabsContainerComponent,
  VgHtmlContainerComponent
} from './containers';
import { Component } from '@angular/core';
import { VgDateComponent } from './fields/date/date.component';
import { VgDatetimeComponent } from './fields/datetime/datetime.component';
import { VgCheckboxComponent } from './fields/checkbox/checkbox.component';
import { VgRadioComponent } from './fields/radio/radio.component';

const fieldTypeComponents = {};
FieldTypes.forEach(type => {
  switch (type) {
    case FieldType.TEXT:
      fieldTypeComponents[type] = VgTextComponent;
      break;
    case FieldType.PASSWORD:
      fieldTypeComponents[type] = VgPasswordComponent;
      break;
    case FieldType.EMAIL:
      fieldTypeComponents[type] = VgEmailComponent;
      break;
    case FieldType.DATE:
      fieldTypeComponents[type] = VgDateComponent;
      break;
    case FieldType.DATETIME:
      fieldTypeComponents[type] = VgDatetimeComponent;
      break;
    case FieldType.CHECKBOX:
      fieldTypeComponents[type] = VgCheckboxComponent;
      break;
    case FieldType.RADIO:
      fieldTypeComponents[type] = VgRadioComponent;
      break;
    case FieldType.SELECT:
      fieldTypeComponents[type] = VgSelectComponent;
      break;
  }
});

export const FieldTypeComponents = fieldTypeComponents;

const containerTypeComponents = {};
ContainerTypes.forEach(type => {
  switch (type) {
    case ContainerType.CONTAINER:
      containerTypeComponents[type] = VgContentContainerComponent;
      break;
    case ContainerType.TABS:
      containerTypeComponents[type] = VgTabsContainerComponent;
      break;
    case ContainerType.HTML:
      containerTypeComponents[type] = VgHtmlContainerComponent;
  }
});

export const ContainerTypeComponents = containerTypeComponents;

export function getComponentForType(type: string) {
  const container = containerTypeComponents[type];
  return container ? container : fieldTypeComponents[type];
}

export function isField(component: FormComponent) {
  return (FieldTypes.indexOf(component.type) >= 0);

}

export function isContainer(component: FormComponent) {
  return (ContainerTypes.indexOf(component.type) >= 0);
}
