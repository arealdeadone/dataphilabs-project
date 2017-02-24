import { DataphiPage } from './app.po';

describe('dataphi App', function() {
  let page: DataphiPage;

  beforeEach(() => {
    page = new DataphiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
