import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-client-add-component',
  templateUrl: './client-add-component.component.html',
  styleUrls: ['./client-add-component.component.css']
})
export class ClientAddComponentComponent implements OnInit {

  @Input()
  clients: Array<Client> = new Array<Client>();

  @Input()
  client: Client = new Client();

  @Input()
  editCondition: boolean;

  @Output()
  editFinishedEvent = new EventEmitter<boolean>();

  firstName: string;
  lastName: string;
  dni: number;
  email: string;
  address: string;

  constructor() { }

  ngOnInit(): void {
  }

  modifyClient(){
    const index = this.clients.indexOf(this.client);

    this.client.firstName = this.firstName;
    this.client.lastName = this.lastName;
    this.client.dni = this.dni;
    this.client.email = this.email;
    this.client.address = this.address;

    this.clients[index] = this.client;
    this.editFinishedEvent.emit(false);
    this.render();
  }

  cancelEdit(){
    this.editFinishedEvent.emit(false);
  }

  addClient(){
    let client: Client = new Client();
    client.clientId = this.findId();
    client.firstName = this.firstName;
    client.lastName = this.lastName;
    client.dni = this.dni;
    client.email = this.email;
    client.address = this.address;

    this.render();

    this.clients.push(client);
  }

  private findId(){
      let id: number = 1;

      while (this.clients.find(element => element.clientId === id) != undefined){
        id++;
      }

      return id;
  }

  private render(){
    this.firstName = "";
    this.lastName = "";
    this.dni = null;
    this.email = "";
    this.address = "";
  }
}
