import { ProfileViewerPage } from './app.po';

describe('profile-viewer App', function() {
  let page: ProfileViewerPage;

  beforeEach(() => {
    page = new ProfileViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
