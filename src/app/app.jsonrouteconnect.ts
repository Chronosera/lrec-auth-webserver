import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class ConfigService {
  server: string = 'localhost:4201'
  response: any
  errorMessage: string
  constructor(private http: HttpClient) { }

  getUsers(): any {
    console.log("Get from UserData.json")
    return this.http.get('http://'+ this.server +'/Users');
  }

  getMachines(): any {
    console.log("Get Machines from UserData.json")
    return this.http.get('http://' + this.server +'/Machines');
  }

  addUser(body) {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const options = { headers: headers };

    const JSONbody = JSON.stringify(body);
    console.log(JSONbody)
    return this.http.post('http://' + this.server + '/Users', JSONbody, options)
  }

  updateUser(body, RFID) {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const options = { headers: headers };

    const JSONbody = JSON.stringify(body);
    console.log(JSONbody)
    return this.http.put('http://' + this.server + '/Users/' + RFID, JSONbody, options)
  }

  deleteUser(rfid): any {
    console.log("Delete from UserData.json")
    return this.http.delete('http://' + this.server + '/Users/' + rfid)
  }
}
