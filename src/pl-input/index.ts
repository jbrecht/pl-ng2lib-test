import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PLInputComponent} from "./pl-input.component";
import {PLTextAreaComponent} from './pl-textarea.component';
import {PLIconModule} from "../pl-icon/index";

@NgModule({
  imports: [CommonModule, PLIconModule],
  exports: [PLInputComponent,PLTextAreaComponent, ],
  declarations: [PLInputComponent, PLTextAreaComponent, ],
})
export class PLInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PLInputModule,
      providers: []
    };
  }
}