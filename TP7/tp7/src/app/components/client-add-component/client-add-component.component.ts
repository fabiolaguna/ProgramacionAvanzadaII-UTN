import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-client-add-component',
  templateUrl: './client-add-component.component.html',
  styleUrls: ['./client-add-component.component.css']
})
export class ClientAddComponentComponent implements OnInit {

  @Input()
  clients: Array<Client> = new Array<Client>();
  firstName: string;
  lastName: string;
  dni: number;
  email: string;
  address: string;

  constructor() { }

  ngOnInit(): void {
  }

  addClient(){
    let client = new Client();
    client.clientId = this.findId();
    client.firstName = this.firstName;
    client.lastName = this.lastName;
    client.dni = this.dni;
    client.email = this.email;
    client.address = this.address;

    this.clients.push(client);
  }

  findId(){
      let id: number = 1;

      while (this.clients.find(element => element.clientId === id) != undefined){
        id++;
      }

      return id;
  }
}
