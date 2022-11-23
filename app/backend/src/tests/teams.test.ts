import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Seu teste', () => {

  let chaiHttpResponse: Response;

  // beforeEach(async () => {
  //   sinon
  //     .stub(User, "findOne")
  //     .resolves(adminReturn as User);
  // });

  // afterEach(()=>{
  //   (User.findOne as sinon.SinonStub).restore();
  // })

  // it('Should return http 200 on /login post with correct body', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app).post('/login').send(adminReturn);

  //   expect(chaiHttpResponse.status).to.be.eq(200);
  //   expect(chaiHttpResponse.body).to.deep.equal(adminReturn);
  // });
});
