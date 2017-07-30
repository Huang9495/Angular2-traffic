import { TrafficPage } from './app.po';

describe('traffic App', function() {
  let page: TrafficPage;

  beforeEach(() => {
    page = new TrafficPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
