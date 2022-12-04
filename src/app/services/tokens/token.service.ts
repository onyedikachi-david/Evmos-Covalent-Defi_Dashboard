import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private httpClient: HttpClient) { }

  getTokensInfo(skip: number, limit: number): Promise<any>
  {
    let getTokensInfoEndpoint = (environment.apiUrl) + environment.chainId +"/xy=k/"+ environment.dexName+"/tokens/?key=" + environment.apiKey+ "&page-size="+ limit + "&page-number="+ skip;
    
    return this.httpClient.get<any>(getTokensInfoEndpoint).toPromise();
  }

  getPoolsInfo(skip: number, limit: number): Promise<any>{
    let getPoolsInfoEndPoint = (environment.apiUrl) + environment.chainId +"/xy=k/"+ environment.dexName+"/pools/?key=" + environment.apiKey+ "&page-size="+ limit + "&page-number="+ skip;
    
    return this.httpClient.get<any>(getPoolsInfoEndPoint).toPromise();
  }

  getPoolInfoByAddress(tokenAddress: string): Promise<any>{
    let getPoolInfoByAddressEndpoint = (environment.apiUrl) + environment.chainId + "/xy=k/"+ environment.dexName+"/pools/address/"+ tokenAddress +"/?key=" + environment.apiKey;
    return this.httpClient.get<any>(getPoolInfoByAddressEndpoint).toPromise();
  }

  getPoolTransactionsInfoByAddress(tokenAddress: string): Promise<any>{
    let getPoolTransactionsInfoByAddressEndPoint = (environment.apiUrl) + environment.chainId + "/xy=k/"+ environment.dexName+"/pools/address/"+ tokenAddress +"/transactions/?key=" + environment.apiKey;
    return this.httpClient.get<any>(getPoolTransactionsInfoByAddressEndPoint).toPromise();
  }

  getTokenInfoByAddress(tokenAddress: string): Promise<any>{
    let getTokenInfoByAddressEndpoint = (environment.apiUrl) + environment.chainId + "/xy=k/"+ environment.dexName+"/tokens/address/"+ tokenAddress +"/?key=" + environment.apiKey;
    return this.httpClient.get<any>(getTokenInfoByAddressEndpoint).toPromise();
  }

  getPoolTokenTransactionsInfoByAddress(tokenAddress: string): Promise<any>{
    let getPoolTokenTransactionsInfoByAddressEndpoint = (environment.apiUrl) + environment.chainId + "/xy=k/"+ environment.dexName+"/tokens/address/"+ tokenAddress +"/transactions/?key=" + environment.apiKey;
    return this.httpClient.get<any>(getPoolTokenTransactionsInfoByAddressEndpoint).toPromise();
  }

  getLiquidityPairBalancesByAddressExchange(tokenAddress: string): Promise<any>{
    let getLiquidityPairBalancesByAddressEndpoint = (environment.apiUrl) + environment.chainId + "/xy=k/"+ environment.dexName+"/address/"+ tokenAddress +"/balances/?key=" + environment.apiKey;
    return this.httpClient.get<any>(getLiquidityPairBalancesByAddressEndpoint).toPromise();
  }

  getLiquidityTransactionsByAddressExchange(tokenAddress: string): Promise<any>{
    let getLiquidityTransactionsByAddressExchangeEndpoint = (environment.apiUrl) + environment.chainId + "/xy=k/"+ environment.dexName+"/address/"+ tokenAddress +"/transactions/?key=" + environment.apiKey;
    return this.httpClient.get<any>(getLiquidityTransactionsByAddressExchangeEndpoint).toPromise();
  }

  
}
