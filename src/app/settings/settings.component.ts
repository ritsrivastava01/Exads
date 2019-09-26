import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public settingsMenu = [
    {
      title: 'API Keys',
      route: 'api-keys'
    },
    {
      title: 'My Profile',
      route: 'my-profile'
    }
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  }
}
