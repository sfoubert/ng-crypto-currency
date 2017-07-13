import { NgCryptoCurrencyPage } from './app.po';

describe('ng-crypto-currency App', () => {
  let page: NgCryptoCurrencyPage;

  beforeEach(() => {
    page = new NgCryptoCurrencyPage();
  });

  it('should display Dashboard', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Dashboard');
  });
});
