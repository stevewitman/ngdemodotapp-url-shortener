import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ShellComponent } from './components/shell/shell.component';
import { ToolbarExternalComponent } from './components/toolbar-external/toolbar-external.component';
import { ToolbarMainComponent } from './components/toolbar-main/toolbar-main.component';

@NgModule({
  declarations: [
    ShellComponent,
    ToolbarExternalComponent,
    ToolbarMainComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  exports: [ShellComponent],
})
export class CoreModule {}
