import { Component, OnInit } from '@angular/core';
import * as socClient from "socket.io-client";
import { NotifyServiceService } from '../notify-service.service';
import { HttpClient } from '@angular/common/http';

// import * as socServer from "socket.io";

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  socket = socClient(); //io.connect();

  public notifications = [];

  constructor(private http: HttpClient, private service: NotifyServiceService) { }

  ngOnInit() {
    this.socket.io.uri = "http://localhost:3000";
    this.socket.io.connect();
    this.getNotifications();
    this.notify();
  }

  notify() {
    console.log("socket", this.socket);
    this.socket.on('new message', ({ message, title }) => {
      this.addNotification({ message, title });
    });
  }

  sendNotification(data) {
    console.log("Inside Send Notification", Notification.permission);
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
      return;
    }

    const options = {
      body: data.message,
      requireInteraction: false,
    };
    
    if (Notification.permission === 'granted') {
      console.log("Permission Granted");
      let notification = new Notification(data.title, options);
      return;
    }
    
    if (Notification.permission !== 'denied') {
      Notification.requestPermission((permission) => {
        console.log("request Permission", permission);
        if (permission === "granted") {
          console.log("Permission Granted");
          let notification = new Notification("New Message " + data.title + "\n" + data.message);
          return;
        }
        console.log("Permission Denied");
        return;
      });
    }

  }

  addNotification(data) {
    this.notifications.unshift(data);
    this.sendNotification(data);
  }

  
  getNotifications() {

    this.service.getNotifications().subscribe(res => {
      console.dir(res);
      this.notifications = res;
      console.log('GOT THE NOTIFICATIONS');
    });

  }

}

// Examples from 
/*
https://socket.io/docs/
https://github.com/socketio/socket.io/blob/master/examples/chat/index.js

*/
