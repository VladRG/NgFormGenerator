import { ContainerTypes, ContainerType, FieldTypes, FieldType } from './../models';
import { } from './../models';
import {
  VgTextComponent,
  VgEmailComponent,
  VgPasswordComponent,
  VgSelectComponent
} from './fields';

import {
  VgContentContainerComponent
} from './containers';
import { Component } from '@angular/core';

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
  }
});

export const ContainerTypeComponents = containerTypeComponents;

export function getComponentForType(type: string) {
  const container = containerTypeComponents[type];
  return container ? container : fieldTypeComponents[type];
}
