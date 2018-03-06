import { Component, OnInit, ViewChild, ViewContainerRef, Input, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';
import { ContainerModelBase, ContainerType } from './../../models';
import { VgContentContainerComponent } from './content/content.component';

@Component({
  selector: 'vg-dynamic-container',
  template: `<div #dynamicComponentContainer></div>`,
  entryComponents: [VgContentContainerComponent]
})
export class VgDynamicContainerComponent implements OnInit {
  constructor(private resolver: ComponentFactoryResolver) { }

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  dynamicComponentContainer: ViewContainerRef;

  @Input()
  model: ContainerModelBase;

  ngOnInit() {
    const inputProviders = [{
      provide: 'model',
      useValue: this.model
    }];

    const resolvedInputs = ReflectiveInjector.resolve(inputProviders);
    const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
    let factory = null;
    if (!this.model) {
      console.error(this);
    }

    // switch case
    switch (this.model.type) {
      case ContainerType.CONTAINER:
        factory = this.resolver.resolveComponentFactory(VgContentContainerComponent);
        break;
    }

    const component = factory.create(injector);
    this.dynamicComponentContainer.insert(component.hostView);
  }
}
