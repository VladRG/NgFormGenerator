import { Component, OnInit, ViewChild, ViewContainerRef, Input, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';
import { ContainerModelBase, ContainerType } from './../../models';
import { ContainerTypeComponents } from './../typeConverter';
import { VgContentContainerComponent } from './content/content.component';
import { VgTabsContainerComponent } from './tabs/tabs.component';
import { VgHtmlContainerComponent } from './html/html.component';

@Component({
  selector: 'vg-dynamic-container',
  template: `<div #dynamicComponentContainer></div>`,
  entryComponents: [VgContentContainerComponent, VgTabsContainerComponent, VgHtmlContainerComponent]
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
    const factory = this.resolver.resolveComponentFactory(ContainerTypeComponents[this.model.type]);
    const component = factory.create(injector);
    this.dynamicComponentContainer.insert(component.hostView);
  }
}
