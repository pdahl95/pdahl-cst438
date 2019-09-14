import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // this function is not used as of now
  getProducts(){
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }
}
