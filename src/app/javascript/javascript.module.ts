import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptComponent } from './javascript.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [JavascriptComponent],
  imports: [CommonModule, MatDividerModule],
  exports: [JavascriptComponent]
})
export class JavascriptModule {}
