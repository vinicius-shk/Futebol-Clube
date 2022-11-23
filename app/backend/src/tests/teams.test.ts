import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import Team from '../database/models/TeamModel'

import { Response } from 'superagent';
import { teamsGetMock } from './mocks/teamMocks';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Team test suit', () => {

  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(Team, "findAll")
      .resolves(teamsGetMock as Team[]);
  });

  afterEach(()=>{
    (Team.findAll as sinon.SinonStub).restore();
  })

  it('Should return http 200 on /teams get', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/teams');

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.deep.equal(teamsGetMock);
  });
});
