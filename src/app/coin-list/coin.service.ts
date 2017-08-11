import { Injectable } from '@angular/core';
import { CoinModel } from 'app/model/coin.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoinService {

  private subjectSelectedCoins: Subject<CoinModel[]> = new Subject();

  constructor() { }

  public getSelectedCoins(): Observable<CoinModel[]> {
    return this.subjectSelectedCoins.asObservable();
  }

  public setSelectedCoins(selectedCoins: CoinModel[]) {
    this.subjectSelectedCoins.next(selectedCoins);
  }
}
