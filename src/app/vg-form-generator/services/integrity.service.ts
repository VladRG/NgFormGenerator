import { Injectable } from '@angular/core';
import { FormComponent, ContentContainerModel, HtmlContainerModel, FieldModelBase } from './../models';
import { SelectModel } from '../models/fields/Select';

@Injectable()
export class IntegrityService {
  public checkFormComponent(component: FormComponent) {

  }

  private checkContainerChildren(container: ContentContainerModel): Array<string> {
    const result = new Array<string>();
    if (!container.children || container.children.length === 0) {
      result.push(`Content Container does not have any children.`);
    }
    return result;
  }

  private checkHtmlContainer(container: HtmlContainerModel): Array<string> {
    const result = new Array<string>();
    if (!container.html) {
      result.push(`HTML container has an undefined or null value in the 'html' property.`);
    }
    return result;
  }

  private checkField(field: FieldModelBase): Array<string> {
    const result = new Array<string>();
    if (!field.id) {
      result.push(`Field of type '${field.type}' has the 'id' property not set`);
    }

    if (!field.name) {
      result.push(`Field of type '${field.type}' has the 'name' property not set`);
    }
    return result;
  }

  private checkSelectField(field: SelectModel): Array<string> {
    if (!field.options || field.options.length === 0) {
      return [
        `Field of type 'select' has the 'options' property null or empty.`
      ];
    }
  }
}


