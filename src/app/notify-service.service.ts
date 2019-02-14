import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotifyServiceService {

  url = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  getNotifications(): Observable<any> {
    const uri = this.url + '/getNotifications';
    return this.httpClient.get(uri);
  }

  postNotifcations(obj: object) {
    const uri = this.url + "/postNotifications";
    return this.httpClient.post(uri, obj)
  }
}
