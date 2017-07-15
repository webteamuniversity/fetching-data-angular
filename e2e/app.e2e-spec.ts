import { FetchingDataPage } from './app.po';

describe('fetching-data App', () => {
  let page: FetchingDataPage;

  beforeEach(() => {
    page = new FetchingDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
