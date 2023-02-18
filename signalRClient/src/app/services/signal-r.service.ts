import { Injectable } from '@angular/core';

import * as signalR from '@microsoft/signalr';
import { HubConnectionBuilder } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  connection:any;
  connectionURL:string ='http://localhost:5145/chathub';
  constructor() { }

  startConnection = () =>{
    this.connection = new HubConnectionBuilder().withUrl(`${this.connectionURL}`, {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    }).build();
    
    this.connection.start()
      .then(() =>{
        console.log("Connected successfully")
      }).catch((error:any) => {
        console.log(error);
      })
  }
}
