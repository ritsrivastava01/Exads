import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExaNoDataContainerComponent } from './exa-no-data-container/exa-no-data-container.component';
import { DescriptionComponent } from './description/description.component';
import { JavascriptComponent } from './javascript/javascript.component';
const routes: Routes = [
  {
    // For demoing purpose ==> Dynamic load module
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then(mod => mod.SettingsModule),
    data: { preload: true }
  },
  {
    // Static load module
    path: 'exa-no-data',
    component: ExaNoDataContainerComponent
  },
  {
    // Static load module
    path: 'description',
    component: DescriptionComponent
  },
  {
    // Static load module
    path: 'javascript',
    component: JavascriptComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
