import { Angular2RedditPage } from './app.po';

describe('angular2-reddit App', () => {
  let page: Angular2RedditPage;

  beforeEach(() => {
    page = new Angular2RedditPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
