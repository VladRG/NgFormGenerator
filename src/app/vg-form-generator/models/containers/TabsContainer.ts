import { ContainerModelBase } from './ContainerBase';
import { ContainerType } from './ContainerType.enum';

export class TabsContainer extends ContainerModelBase {
  constructor() {
    super();
  }
  type: ContainerType = ContainerType.TABS;
}
