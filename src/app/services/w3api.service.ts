import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class W3apiService {

  public dappData: any;
  public apiURL: string;
  public loaded: boolean;


  constructor(private http: HttpClient) {
    this.loaded = false;
    this.apiURL = '/api.json';    
    this.getRemoteDappData();
  }

  getRemoteDappData(){

    return new Promise((resolve, reject) => {
      this.http.get(this.apiURL).subscribe(response => {
        this.dappData = response;
        console.log("after loading and fixing", this.dappData);
        this.loaded = true;
        
        resolve(true);
      },
      error => {
        this.loaded = false;
        reject(false);
      });
    });    
  }


  public getDappData() {  
    return this.dappData; 
  }

}
