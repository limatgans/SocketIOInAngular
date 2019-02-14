import { Component, OnInit } from '@angular/core';
import { clientBroadcast } from 'src/utils/broadcast';
import { NotifyServiceService } from '../notify-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client1',
  templateUrl: './client1.component.html',
  styleUrls: ['./client1.component.css']
})
export class Client1Component implements OnInit {

  constructor(private http: HttpClient, private service: NotifyServiceService) { }

  ngOnInit() {
  }

  broadcast() {
    const messageElement = <HTMLInputElement>(document.getElementById("message"));
    const message = messageElement.value;
    const titleElement = <HTMLInputElement>(document.getElementById("title"));
    const title = titleElement.value;
    this.service.postNotifcations({title, message}).subscribe(res => {
      console.log("res", res);
      console.log("Posted Notifications to server");
      clientBroadcast({message, title});
    }, err=> console.log("Couldnt post notifications to server"));
  }

}
