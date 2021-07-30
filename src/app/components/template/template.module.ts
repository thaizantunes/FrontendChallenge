import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TemplateComponent } from './template/template.component';

import { LoadingComponent } from './loading/loading.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOnceDirective } from '../../directives/click-once-directive';
import { DebounceClickDirective } from '../../directives/debounce-click-directive';
import { StrictNumberOnlyDirective } from '../../directives/strict-number-only-directive';

@NgModule({
  declarations: [
    TemplateComponent,
    LoadingComponent,
    ClickOnceDirective,
    StrictNumberOnlyDirective,
    DebounceClickDirective,
  ],
  imports: [CommonModule, FlexLayoutModule, NgbModule],
  exports: [
    TemplateComponent,
    LoadingComponent,
    ClickOnceDirective,
    StrictNumberOnlyDirective,
    DebounceClickDirective,
  ],
})
export class TemplateModule {}
