import { ContainerModelBase } from './ContainerBase';
import { ContainerType } from './ContainerType.enum';

export class HtmlContainerModel extends ContainerModelBase {
  type: ContainerType = ContainerType.HTML;
  html: string = '';
}
