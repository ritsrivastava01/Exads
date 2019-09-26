import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaNoDataContainerComponent } from './exa-no-data-container.component';
import { ExaNoDataComponent } from './exa-no-data/exa-no-data.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ExaNoDataContainerComponent, ExaNoDataComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [ExaNoDataContainerComponent]
})
export class ExaNoDataContainerModule {}
