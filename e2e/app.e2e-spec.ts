import { UiProjectPage } from './app.po';

describe('ui-project App', function() {
  let page: UiProjectPage;

  beforeEach(() => {
    page = new UiProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
