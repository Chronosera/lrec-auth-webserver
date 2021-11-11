import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {
  }

  private async request(method: string, url: string, data?: any) {
    //const token = await this.Auth0.getAccessToken();

    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      //headers: {
      //  Authorization: `Bearer ${token}`
      //}
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  getUsers() {
    return this.request('GET', `${environment.serverUrl}/event`);
  }

  createUser(user) {
    return this.request('POST', `${environment.serverUrl}/event`, user);
  }

  updateUser(user) {
    return this.request('PUT', `${environment.serverUrl}/event/${user.RFID}`, user);
  }

  deleteUser(user) {
    return this.request('DELETE', `${environment.serverUrl}/event/${user.RFID}`);
  }
}
