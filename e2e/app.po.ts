import { browser, element, by } from 'protractor';

export class ProfileViewerPage {
  navigateTo() {
    return browser.get('/');
  }

  getSearchButtonLabel() {
    return element(by.css('button')).getText();
  }

  searchUserByName(name:string) {
    console.log("fetching textbox");
    element(by.css('input')).sendKeys(name);

    console.log("send value to textbox");
    element(by.css('button')).click();
  }

  waitForLoading() {
    browser.waitForAngular();
  }

  getLocationText() {
   return element(by.id('loc')).getText();
  }
}
