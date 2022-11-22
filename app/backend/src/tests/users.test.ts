import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import User from '../database/models/UserModel';
import { adminReturn } from './mocks/userToken';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Seu teste', () => {

  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(adminReturn as User);
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('Should return http 200 on /login post with correct body', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send(adminReturn);

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.deep.equal(adminReturn);
  });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});
