import { Injectable } from '@angular/core';
import { Coin } from 'app/model/Coin';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoinService {

  private subjectSelectedCoins: Subject<string[]> = new Subject();

  constructor() { }

  public getSelectedCoins(): Observable<string[]> {
    return this.subjectSelectedCoins.asObservable();
  }

  public setSelectedCoins(selectedCoins: string[]) {
    this.subjectSelectedCoins.next(selectedCoins);
  }
}
