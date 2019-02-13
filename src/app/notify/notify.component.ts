import { Component, OnInit } from '@angular/core';
import * as socClient from "socket.io-client";
import * as socServer from "socket.io";

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  socket = io();

  public notifications = [
    {
      title: "First Notification",
      message: "Random Post"
    },
    {
      title: "2nd Notification",
      message: "Another Random Post"
    },
    {
      title: "3rd Notification",
      message: "3rd is a charm"
    }
  ];

  constructor() { }

  ngOnInit() {
    this.notify();
  }

  notify() {
    this.socket.on('new message', ({message, title}) => {
      console.log("Type of Data", typeof message, typeof title);
      this.addNotification({message, title});
    });
  }

  addNotification(data) {
    this.notifications.unshift(data);
  }

}


// Examples from 
/*
https://socket.io/docs/
https://github.com/socketio/socket.io/blob/master/examples/chat/index.js

*/
