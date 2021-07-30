import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { NgxMaskModule } from 'ngx-mask';

import { SummonersRiftComponent } from './summoners-rift.component';
import { TemplateModule } from '../../components/template/template.module';
import { SummonersRiftModuleRoutingModule } from './summoners-rift.routing';

@NgModule({
  imports: [
    SummonersRiftModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    NgxMaskModule.forRoot(),
    CommonModule,
    TemplateModule,
  ],
  exports: [],
  declarations: [SummonersRiftComponent],
})
export class SummonersRiftModule {}
