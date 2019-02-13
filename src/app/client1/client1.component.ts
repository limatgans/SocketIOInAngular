import { Component, OnInit } from '@angular/core';
import { clientBroadcast } from 'src/utils/broadcast';

@Component({
  selector: 'app-client1',
  templateUrl: './client1.component.html',
  styleUrls: ['./client1.component.css']
})
export class Client1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  broadcast() {
    const messageElement = <HTMLInputElement>(document.getElementById("message"));
    const message = messageElement.value;
    const titleElement = <HTMLInputElement>(document.getElementById("title"));
    const title = titleElement.value;
    clientBroadcast({message, title});
  }

}
