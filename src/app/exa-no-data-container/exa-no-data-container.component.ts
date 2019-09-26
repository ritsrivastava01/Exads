import { Component } from '@angular/core';

@Component({
  selector: 'exa-no-data-container',
  templateUrl: './exa-no-data-container.component.html',
  styleUrls: ['./exa-no-data-container.component.scss']
})
export class ExaNoDataContainerComponent {
  // text for child component
  icon = '&#xE051';
  description =
    'You have not created any site yet, use button below to create a site';
  actionBtnTxt = 'New Site';
  title = 'No Sites';

  btnActionClickHandler = () => console.log('button clicked!');
}
