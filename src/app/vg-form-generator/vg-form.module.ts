import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  // Form Component
  VgFormComponent,

  // Fields
  VgTextComponent,
  VgEmailComponent,
  VgPasswordComponent,

  // Containers,
  VgContentContainerComponent,
  VgSelectComponent,
  VgTabsContainerComponent
} from './components';

import { VgDynamicFieldComponent } from './components/fields/dynamicField.component';
import { VgDynamicContainerComponent } from './components/containers/dynamicContainer.component';

// Services
import {
  VgDeserializationService
} from './services';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    // Form Component
    VgFormComponent,

    // Fields
    VgTextComponent,
    VgEmailComponent,
    VgPasswordComponent,
    VgDynamicFieldComponent,
    VgSelectComponent,

    // Containers,
    VgContentContainerComponent,
    VgTabsContainerComponent,
    VgDynamicContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    VgDeserializationService
  ],
  exports: [VgFormComponent]

})
export class VgFormGeneratorModule { }
