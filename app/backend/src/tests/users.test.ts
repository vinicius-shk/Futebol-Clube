import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import User from '../database/models/UserModel';
import { adminReturn, noEmailBody, noPassBody } from './mocks/userToken';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Seu teste', () => {

  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(adminReturn as User);
  });

  afterEach(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('Should return http 200 on /login post with correct body', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send(adminReturn);

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.deep.equal(adminReturn);
  });

  it('Should return http 400 on lacking email on body', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send(noEmailBody);

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.deep.equal({ "message": "All fields must be filled" });
  });

  it('Should return http 400 on lacking password on body', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send(noPassBody);

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.deep.equal({ "message": "All fields must be filled" });
  });
});
