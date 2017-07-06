import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import { CryptoCompareResponse } from 'app/model/crypto-compare.response';
import { CryptoCompareUtil } from 'app/crypto-compare/crypto-compare.util';
import { CoinModel } from 'app/model/coin.model';
import { PriceModel } from 'app/model/price.model';
import { HistoModel } from 'app/model/histo.model';

@Injectable()
export class CryptoCompareService {

  private API_BASE = 'https://www.cryptocompare.com/api';
  private MINI_API_BASE = 'https://min-api.cryptocompare.com';

  private DEFAULT_LIMIT = 60;

  constructor(private http: Http) { }

  /**
   * Get list of coins
   */
  getCoinList(): Observable<CoinModel> {
    return this.http.get(this.API_BASE + '/data/coinlist/')
      .map(response => response.json() as CryptoCompareResponse)
      .mergeMap(ccResponse => Object.keys(ccResponse.Data).map(key => ccResponse.Data[key]))
      .map(object => CryptoCompareUtil.convertToCoin(object))
      .catch(this.handleError);
  }

  /**
   * Get price of a currency
   */
  getPrice(currency: string): Observable<PriceModel> {
    return this.http.get(this.MINI_API_BASE + '/data/price?fsym=' + currency + '&tsyms=BTC,USD,EUR')
      .map(response => response.json() as PriceModel)
      .catch(this.handleError);
  }

  /**
   * Get Histo by day
   */
  getHistoDay(currency: string): Observable<HistoModel> {
    return this.http.get(this.MINI_API_BASE + '/data/histoday?fsym=' + currency + '&tsym=EUR&limit=' + this.DEFAULT_LIMIT)
      .map(response => response.json() as CryptoCompareResponse)
      .mergeMap(ccResponse => Object.keys(ccResponse.Data).map(key => ccResponse.Data[key]))
      .map(object => CryptoCompareUtil.convertToHisto(object))
      .catch(this.handleError);
  }

  /**
   * Get Histo by hour
   */
  getHistoHour(currency: string): Observable<HistoModel> {
    return this.http.get(this.MINI_API_BASE + '/data/histohour?fsym=' + currency + '&tsym=EUR&limit=' + this.DEFAULT_LIMIT)
      .map(response => response.json() as CryptoCompareResponse)
      .mergeMap(ccResponse => Object.keys(ccResponse.Data).map(key => ccResponse.Data[key]))
      .map(object => CryptoCompareUtil.convertToHisto(object))
      .catch(this.handleError);
  }

  /**
   * Get Histo by minute
   */
  getHistoMinute(currency: string): Observable<HistoModel> {
    return this.http.get(this.MINI_API_BASE + '/data/histominute?fsym=' + currency + '&tsym=EUR&limit=' + this.DEFAULT_LIMIT)
      .map(response => response.json() as CryptoCompareResponse)
      .mergeMap(ccResponse => Object.keys(ccResponse.Data).map(key => ccResponse.Data[key]))
      .map(object => CryptoCompareUtil.convertToHisto(object))
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
