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
  const list = [...teamsGetMock as Team[]];

  beforeEach(async () => {
    sinon
      .stub(Team, "findAll")
      .resolves(teamsGetMock as Team[]);
    sinon
      .stub(Team, "findByPk")
      .resolves(list[4] as Team);
  });

  afterEach(()=>{
    (Team.findAll as sinon.SinonStub).restore();
    (Team.findByPk as sinon.SinonStub).restore();
  })

  it('Should return http 200 on /teams get', async () => {
    chaiHttpResponse = await chai
       .request(app).get('/teams');

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.deep.equal(teamsGetMock);
  });

  it('Should return http 200 on /teams/:id get whit correct team', async () => {
    const expected = list.find((team: { id: number, teamName: string }) => team.id === 5)
    chaiHttpResponse = await chai
       .request(app).get('/teams/5');

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.deep.equal(expected);
  });
});
