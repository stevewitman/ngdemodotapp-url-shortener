import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ShellComponent } from './components/shell/shell.component';
import { ToolbarExternalComponent } from './components/toolbar-external/toolbar-external.component';
import { ToolbarMainComponent } from './components/toolbar-main/toolbar-main.component';
import { NavMainComponent } from './components/nav-main/nav-main.component';

@NgModule({
  declarations: [
    ShellComponent,
    ToolbarExternalComponent,
    ToolbarMainComponent,
    NavMainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [ShellComponent],
})
export class CoreModule {}
