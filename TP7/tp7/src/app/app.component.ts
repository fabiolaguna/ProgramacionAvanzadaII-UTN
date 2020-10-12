import { Component, Input } from '@angular/core';
import { Client } from './models/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp7';
  clients = new Array<Client>();
  client: Client;
  editCondition: boolean = false;

  editSelectedClient(clientToEdit : Client){
      this.client = clientToEdit;
      this.editCondition = true;
  }

  editClientFinished(editFinished: boolean){
    this.editCondition = editFinished;
  }
}
