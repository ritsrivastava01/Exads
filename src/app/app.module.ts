import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SettingsRoutingModule } from './settings/settings-routing.module';
import { SettingsModule } from './settings/settings.module';
import { ExaNoDataContainerModule } from './exa-no-data-container/exa-no-data-container.module';
import { DescriptionModule } from './description/description.module';
import { JavascriptModule } from './javascript/javascript.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SettingsRoutingModule,
    SettingsModule,
    ExaNoDataContainerModule,
    MatTooltipModule,
    DescriptionModule,
    JavascriptModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
