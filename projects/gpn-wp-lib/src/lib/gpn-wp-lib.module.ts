import { NgModule } from '@angular/core';
import { GpnWpLibComponent } from './gpn-wp-lib.component';
import {DateFormatPipe} from './common/_pipes/date-format.pipe';
import {
  AiAreasComponent,
  AiComponent,
  CommentDialogComponent,
  GpnTableComponent,
  WorkflowComponent,
  WorkflowViewerComponent
} from './component';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ContentDialogComponent} from './component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [
    GpnWpLibComponent,
    GpnTableComponent,
    ContentDialogComponent,
    WorkflowComponent,
    WorkflowViewerComponent,
    CommentDialogComponent,
    AiAreasComponent,
    AiComponent
  ],
  imports: [
    MatTableModule,
    MatSelectModule,
    MatTabsModule,
    MatRippleModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    GpnWpLibComponent,
    GpnTableComponent,
    ContentDialogComponent,
    WorkflowComponent,
    WorkflowViewerComponent,
    CommentDialogComponent,
    AiAreasComponent,
    AiComponent
  ]
})
export class GpnWpLibModule { }
