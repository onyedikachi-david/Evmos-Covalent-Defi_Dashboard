import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HealthService{

  
  constructor(private httpClient: HttpClient) { 
    
  }


  getHealthStatus(): Promise<any>{
    let healthEndPoint = (environment.apiUrl) + environment.chainId +"/xy=k/"+ environment.dexName+"/health/?key=" + environment.apiKey;
    return this.httpClient.get<any>(healthEndPoint).toPromise();
  }
}
