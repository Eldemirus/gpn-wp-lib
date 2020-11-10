import { NgModule } from '@angular/core';
import { GpnWpLibComponent } from './gpn-wp-lib.component';
import {DateFormatPipe} from './common/_pipes/date-format.pipe';



@NgModule({
  declarations: [
    GpnWpLibComponent
  ],
  imports: [
  ],
  exports: [GpnWpLibComponent]
})
export class GpnWpLibModule { }
