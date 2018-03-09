import { Component, OnInit, ViewChild, ViewContainerRef, Input, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';
import { FieldType, FieldModelBase } from './../../models';
import { VgTextComponent } from './text/text.component';
import { VgEmailComponent } from './email/email.component';
import { VgPasswordComponent } from './password/password.component';
import { VgSelectComponent } from './select/select.component';
import { FieldTypeComponents } from './../typeConverter';
import { VgDateComponent } from './date/date.component';
import { VgDatetimeComponent } from './datetime/datetime.component';
import { VgRadioComponent } from './radio/radio.component';
import { VgCheckboxComponent } from './checkbox/checkbox.component';

@Component({
  selector: 'vg-dynamic-field',
  template: `<div #dynamicComponentContainer></div>`,
  entryComponents: [
    VgTextComponent,
    VgEmailComponent,
    VgPasswordComponent,
    VgSelectComponent,
    VgDateComponent,
    VgDatetimeComponent,
    VgRadioComponent,
    VgCheckboxComponent
  ]
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
    const factory = this.resolver.resolveComponentFactory(FieldTypeComponents[this.model.type]);
    const component = factory.create(injector);
    this.dynamicComponentContainer.insert(component.hostView);
  }
}
