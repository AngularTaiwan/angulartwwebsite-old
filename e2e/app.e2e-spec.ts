import { Angular.TwPage } from './app.po';

describe('angular.tw App', () => {
  let page: Angular.TwPage;

  beforeEach(() => {
    page = new Angular.TwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
