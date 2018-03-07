import { Injectable } from '@angular/core';
import { FormModel } from '../models';
import { ContainerModelBase, ContainerType, FieldModelBase } from './../models';
import { ContentContainerModel } from '../models';

@Injectable()
export class VgDeserializationService {
  deserializeForm(json: any): FormModel {
    const formModel = new FormModel();
    formModel.method = json.method;
    formModel.url = json.url;
    formModel.name = json.name;

    formModel.entry = <ContainerModelBase>this.deserializeComponent(json.entry);
    return formModel;
  }

  copyProperties(from: any, to: any): any {
    for (const prop in from) {
      if (prop !== 'children') {
        to[prop] = from[prop];
      }
    }
    return to;
  }

  deserializeComponent(json: any): ContainerModelBase {
    let result = null;
    switch (json.type) {
      case ContainerType.CONTAINER:
        result = new ContentContainerModel();
        break;
      default:
        result = new FieldModelBase();
    }

    result.children = this.deserializeChildren(json);
    return this.copyProperties(json, result);
  }

  deserializeChildren(json: any): Array<ContainerModelBase> {
    const result = new Array<ContainerModelBase>();
    if (json.children) {
      json.children.forEach(element => {
        const child = <ContainerModelBase>this.deserializeComponent(element);
        result.push(child);
      });
    }
    return result;
  }

  serializeForm(formModel: FormModel): any {
    return null;
  }

  public serialize(source: FormModel, type: Number): String {
    let result: String = '';
    switch (type) {
      case 0:
        result = JSON.stringify(source);
        break;
      case 1:
        result = JSON.stringify(this.getFields());
        break;
    }
    return result;
  }

  getFields() {

  }
}
