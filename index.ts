import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SampleComponent} from "./src/sample.component";
import {SampleDirective} from "./src/sample.directive";
import {SamplePipe} from "./src/sample.pipe";
import {SampleService} from "./src/sample.service";

import {PLInputComponent} from "./src/pl-input/pl-input.component";
import {PLTextAreaComponent} from './src/pl-input/pl-textarea.component';

/*export * from './src/sample.component';
export * from './src/sample.directive';
export * from './src/sample.pipe';
export * from './src/sample.service';

export * from './src/pl-input/pl-input.component';
export * from './src/pl-input/pl-textarea.component';*/

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
    PLInputComponent,
    PLTextAreaComponent
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
    PLInputComponent,
    PLTextAreaComponent
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}
