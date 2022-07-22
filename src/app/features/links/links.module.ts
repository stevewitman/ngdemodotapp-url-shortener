import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksRoutingModule } from './links-routing.module';
import { LinksPageComponent } from './links-page/links-page.component';


@NgModule({
  declarations: [
    LinksPageComponent
  ],
  imports: [
    CommonModule,
    LinksRoutingModule
  ]
})
export class LinksModule { }
