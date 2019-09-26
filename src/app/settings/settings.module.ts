import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { ApiKeysComponent } from './api-keys/api-keys.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs'

@NgModule({
  declarations: [SettingsComponent, ApiKeysComponent, MyProfileComponent],
  imports: [CommonModule, RouterModule,MatTabsModule]
})
export class SettingsModule {}
