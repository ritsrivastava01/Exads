import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ApiKeysComponent } from './api-keys/api-keys.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'api-keys',
        component: ApiKeysComponent
      },
      {
        path: 'my-profile',
        component: MyProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
