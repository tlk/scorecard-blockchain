import { ScorecardBlockchainPage } from './app.po';

describe('scorecard-blockchain App', () => {
  let page: ScorecardBlockchainPage;

  beforeEach(() => {
    page = new ScorecardBlockchainPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
