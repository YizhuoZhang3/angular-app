import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl:  './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus: string = 'offline';
  servername = 'TestServer';
  username = '';
  empty = true;
  serverCreated = false;

  servers = ['testServer1', 'testServer2']
  constructor() { 
    setTimeout(()=>{this.allowNewServer=true}, 2000);

    this.serverCreationStatus = Math.random() > 0.5 ? 'online' : 'offline';

  }
  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is '+ this.servername;
    this.servers.push(this.servername)
  }

  onUpdateServerName(event: any){
    this.servername = (<HTMLInputElement>event.target).value;
  }

  getColor(){
    return this.serverCreationStatus === 'online' ? 'green' : 'red';
  }

}
