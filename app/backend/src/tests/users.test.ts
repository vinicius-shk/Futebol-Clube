import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import User from '../database/models/UserModel';
import { adminData, adminReturn, noEmailBody, noPassBody, tokenReturn } from './mocks/userMocks';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Test suit /login', () => {

  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(adminReturn as User);
    sinon
      .stub(jwt, "sign")
      .resolves(tokenReturn.token as string);
  });

  afterEach(()=>{
    (User.findOne as sinon.SinonStub).restore();
    (jwt.sign as sinon.SinonStub).restore();
  })

  it('Should return http 200 on /login post with correct body', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send(adminData);    

       expect(chaiHttpResponse.status).to.be.eq(200);
  });

  it('Should return http 400 on lacking email on body', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send(noEmailBody);

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message: "All fields must be filled" });
  });

  it('Should return http 400 on lacking password on body', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send(noPassBody);

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message: "All fields must be filled" });
  });
});
