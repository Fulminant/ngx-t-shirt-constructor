import { NgxTShirtConstructorPage } from './app.po';

describe('ngx-t-shirt-constructor App', () => {
  let page: NgxTShirtConstructorPage;

  beforeEach(() => {
    page = new NgxTShirtConstructorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
