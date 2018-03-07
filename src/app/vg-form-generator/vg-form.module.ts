import { NgModule } from '@angular/core';
import {
  // Form Component
  VgFormComponent,

  // Fields
  VgTextComponent,
  VgEmailComponent,
  VgPasswordComponent,
  VgDynamicFieldComponent,

  // Containers,
  VgContentContainerComponent,
  VgDynamicContainerComponent
} from './components';

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

    // Containers,
    VgContentContainerComponent,
    VgDynamicContainerComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    VgDeserializationService
  ],
  exports: [VgFormComponent]

})
export class VgFormGeneratorModule { }
