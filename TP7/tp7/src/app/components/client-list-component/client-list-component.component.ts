import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-client-list-component',
  templateUrl: './client-list-component.component.html',
  styleUrls: ['./client-list-component.component.css']
})
export class ClientListComponentComponent implements OnInit {
  @Input()
  clients: Array<Client> = new Array<Client>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteClient(client){
    this.clients.splice(this.clients.indexOf(client), 1);
  }
}
