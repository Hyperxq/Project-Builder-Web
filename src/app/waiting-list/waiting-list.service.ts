import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WaitingListService {
  linkToSend =
    'https://magic.beehiiv.com/v1/3d75bac9-f3cf-41d4-ad85-b2ee13c94c8e?email=';

  constructor(private http: HttpClient) {}

  // addToWaitingList(email: string) {
  //   // return this.http.get(`${this.linkToSend}}/${email}`);
  //   windows.
  // }
}
