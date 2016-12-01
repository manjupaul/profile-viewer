import { ProfileViewerPage } from './app.po';

describe('profile-viewer App', function() {
  let page: ProfileViewerPage;

  beforeEach(() => {

  });

  it('should display message saying app works', () => {
    page = new ProfileViewerPage();
    page.navigateTo();
    expect(page.getSearchButtonLabel()).toEqual('Search');
    page.searchUserByName("manjupaul");
    page.waitForLoading();
    expect(page.getLocationText()).toEqual("Location:Washington D.C. Metro Area");
  });
});
