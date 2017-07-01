import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import { CryptoCompareResponse } from 'app/model/crypto-compare-response';
import { Coin } from 'app/model/coin';
import { Price } from 'app/model/price';

@Injectable()
export class CryptoCompareService {

  private API_BASE = 'https://www.cryptocompare.com/api';
  private MINI_API_BASE = 'https://min-api.cryptocompare.com';

  constructor(private http: Http) { }

  /**
   * Get list of coins
   */
  getCoinList(): Observable<Coin> {
    return this.http.get(this.API_BASE + '/data/coinlist/')
      .map(response => response.json() as CryptoCompareResponse)
      .mergeMap(ccResponse => Object.keys(ccResponse.Data).map(key => ccResponse.Data[key]))
      .map(object => this.convertToCoin(object))
      .catch(this.handleError);
  }

  private convertToCoin(object: any): Coin {
    const res: Coin = new Coin();
    res.algorithm = object['Algorithm'];
    res.coinName = object['CoinName'];
    res.fullName = object['FullName'];
    res.fullyPremined = object['FullyPremined'];
    res.id = object['Id'];
    res.imageUrl = object['ImageUrl'];
    res.name = object['Name'];
    res.preMinedValue = object['PreMinedValue'];
    res.proofType = object['ProofType'];
    res.dortOrder = object['DortOrder'];
    res.totalCoinSupply = object['TotalCoinSupply'];
    res.totalCoinsFreeFloat = object['TotalCoinsFreeFloat'];
    res.url = object['Url'];
    return res;
  }

  /**
   * Get price of a currency
   */
  getPrice(currency: string): Observable<Price> {
    return this.http.get(this.MINI_API_BASE + '/data/price?fsym=' + currency + '&tsyms=BTC,USD,EUR')
      .map(response => response.json() as Price)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
