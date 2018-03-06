import { Component, OnInit, ViewChild, ViewContainerRef, Input, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';
import { FieldType, FieldModelBase } from './../../models';
import { VgTextComponent } from './text/text.component';
import { VgEmailComponent } from './email/email.component';
import { VgPasswordComponent } from './password/password.component';

@Component({
  selector: 'vg-dynamic-field',
  template: `<div #dynamicComponentContainer></div>`,
  entryComponents: []
})
export class VgDynamicFieldComponent implements OnInit {
  constructor(private resolver: ComponentFactoryResolver) { }

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  dynamicComponentContainer: ViewContainerRef;

  @Input()
  model: FieldModelBase;

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
      case FieldType.TEXT:
        factory = this.resolver.resolveComponentFactory(VgTextComponent);
        break;
      case FieldType.PASSWORD:
        factory = this.resolver.resolveComponentFactory(VgPasswordComponent);
        break;
      case FieldType.EMAIL:
        factory = this.resolver.resolveComponentFactory(VgEmailComponent);
        break;
    }

    const component = factory.create(injector);
    this.dynamicComponentContainer.insert(component.hostView);
  }
}
