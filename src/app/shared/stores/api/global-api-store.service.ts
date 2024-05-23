import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ntsApiStoreCreator } from '@ntersol/state-management';
import { BehaviorSubject } from 'rxjs';
import LOANS from '../../../../assets/mock-data/loans';
import LOGGED_IN_USER from '../../../../assets/mock-data/logged-in-user';
import { Models } from '../../models/global.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private store = ntsApiStoreCreator(this.http);
  public users = this.store<Models.User>({ uniqueId: 'id', apiUrl: 'https://jsonplaceholder.typicode.com/users' });

  public loggedInUser$ = new BehaviorSubject<Models.LoggedInUser>(LOGGED_IN_USER).asObservable();
  public loans$ = new BehaviorSubject<Models.Loan[]>(LOANS).asObservable();

  // public users$ = this.http.get()
  // List all store services here
  constructor(public http: HttpClient) {}
}
