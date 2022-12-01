import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import Match from '../database/models/MatchModel'

import { Response } from 'superagent';
import { matchesMock } from './mocks/matchesMocks';
import Team from '../database/models/TeamModel';
import { teamsGetMock } from './mocks/teamMocks';
import { awayResult, fullMatchesMock, homeResult, leaderbordComplete } from './mocks/leaderboardMock';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Matches test suit', () => {

  let chaiHttpResponse: Response;

  beforeEach(()=>{
    sinon
      .stub(Match, 'findAll')
      .resolves(fullMatchesMock as Match[]);

    sinon
      .stub(Team, 'findAll')
      .resolves(teamsGetMock as Team[]);

  });

  afterEach(()=>{
    (Match.findAll as sinon.SinonStub).restore();
    (Team.findAll as sinon.SinonStub).restore();
  })

  it('Should return http 200 on /leaderboard/home get', async () => {
    chaiHttpResponse = await chai
       .request(app).get('/leaderboard/home');

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.deep.equal(homeResult);
  });

  it('Should return http 200 on /leaderboard/away get', async () => {
    chaiHttpResponse = await chai
       .request(app).get('/leaderboard/away');

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.deep.equal(awayResult);
  });

  it('Should return http 200 on /leaderboard get', async () => {
    chaiHttpResponse = await chai
       .request(app).get('/leaderboard');

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.deep.equal(leaderbordComplete);
  });
});
