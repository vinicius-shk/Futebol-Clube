import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import Match from '../database/models/MatchModel'

import { Response } from 'superagent';
import { finishedMatches, matchesMock, ongoingMatches, createBody, returnBodyCreate, updateScoreBody } from './mocks/matchesMocks';
import ICreateMatchBody from '../Interfaces/Match/createMatch';
import { tokenReturn } from './mocks/userMocks';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Matches test suit', () => {

  let chaiHttpResponse: Response;

  beforeEach(()=>{
    sinon
      .stub(Match, "findAll")
      .onFirstCall()
      .resolves(matchesMock as Match[])
      .onSecondCall()
      .resolves(ongoingMatches as Match[])
      .onThirdCall()
      .resolves(finishedMatches as Match[]);

    sinon
      .stub(Match, 'create')
      .resolves(returnBodyCreate);

    sinon
      .stub(Match, 'update')
      .onFirstCall()
      .resolves([0])
      .onSecondCall()
      .resolves([1]);
  });

  afterEach(()=>{
    (Match.findAll as sinon.SinonStub).restore();
    (Match.create as sinon.SinonStub).restore();
    (Match.update  as sinon.SinonStub).restore();
  })

  it('Should return http 200 on /matches with and without query params', async () => {
    chaiHttpResponse = await chai
       .request(app).get('/matches');

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.deep.equal(matchesMock);
    chaiHttpResponse = await chai
       .request(app).get('/matches').query({ inProgress: true});
  
    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.deep.equal(ongoingMatches);
  
    chaiHttpResponse = await chai
       .request(app).get('/matches').query({ inProgress: false});
  
    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.deep.equal(finishedMatches);
  });

  it('Should return http 201 on /matches create', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/matches').set('authorization', tokenReturn.token).send(createBody);

    expect(chaiHttpResponse.status).to.be.eq(201);
    expect(chaiHttpResponse.body).to.deep.equal(returnBodyCreate);
  });

  it('Should return http 200 on /matches/:id/finish', async () => {
    chaiHttpResponse = await chai
       .request(app).patch('/matches/1/finish');

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.deep.equal({ message: 'Finished'});
  });
  it('Should return http 404 on non-existing id and 200 correct id on /matches/:id patch', async () => {
    chaiHttpResponse = await chai
       .request(app).patch('/matches/999').send(updateScoreBody);

    expect(chaiHttpResponse.status).to.be.eq(404);

    chaiHttpResponse = await chai
       .request(app).patch('/matches/1').send(updateScoreBody);

    expect(chaiHttpResponse.status).to.be.eq(200);
  });
});
