import { Injectable } from '@angular/core';
import { ContainerModelBase, ContainerType, FieldModelBase, ContentContainerModel, FormModel, FormComponent } from './../models';
import { isField, isContainer } from './../components/typeConverter';

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

  public serializeForm(source: FormModel, type: SerializeType): Array<{ name: string, value: any }> | any {
    let result: Array<{ name: string, value: any }> = new Array<{ name: string, value: any }>();
    switch (type) {
      case SerializeType.OBJECT:
        result = this.serializeFormComponent(source.entry);
        break;
      case SerializeType.STRING:
        return JSON.stringify(source);
    }
    return result;
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

  private serializeFormComponent(component: FormComponent): Array<{ name: string, value: any }> {
    if (isField(component)) {
      const fieldComponent = component as FieldModelBase;
      return [{
        name: component.name,
        value: fieldComponent.value
      }];
    }
    const containerComponent = component as ContainerModelBase;
    let result = Array<{ name: string, value: any }>();
    containerComponent.children.forEach(element => {
      result = result.concat(this.serializeFormComponent(element));
    });
    return result;
  }
}

enum SerializeType {
  OBJECT = 'object',
  STRING = 'string'
}
