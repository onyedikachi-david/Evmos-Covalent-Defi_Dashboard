import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EcosystemService {

  constructor(private httpClient: HttpClient) { }

  getEcosystemInfo(): Promise<any>
  {
    let ecoSystemInfoEndPoint = (environment.apiUrl) + environment.chainId +"/xy=k/"+ environment.dexName+"/ecosystem/?key=" + environment.apiKey;
    return this.httpClient.get<any>(ecoSystemInfoEndPoint).toPromise();
  }
}
