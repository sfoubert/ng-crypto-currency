import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Crypto Currency';

  krakenCurrencies = ['XBT', 'ETH', 'BCH', 'DASH', 'EOS', 'ETC', 'ETH',
                      'GNO', 'ICN', 'LTC', 'MLN', 'REP', 'USDT', 'XDG',
                      'XLM', 'XMR', 'XRP', 'ZEC'];
}
