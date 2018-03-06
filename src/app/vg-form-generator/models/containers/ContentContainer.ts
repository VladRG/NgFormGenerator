import { ContainerModelBase } from './ContainerBase';
import { ContainerType } from '.';

export class ContentContainerModel extends ContainerModelBase {
  type: ContainerType = ContainerType.CONTAINER;
}
