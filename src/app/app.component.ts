import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testSvg';
  constructor() { }

  public async ngOnInit() {
    
  }

  deleteAccept(s:any)
  {
console.log(s);
  }
}
