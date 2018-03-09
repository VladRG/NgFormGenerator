import { ContainerModelBase } from './containers';

export class FormModel {
  name: string;
  method: string;
  url: string;
  entry: ContainerModelBase;
  submit: (formModel: FormModel) => void;
}
