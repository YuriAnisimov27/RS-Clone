import {add} from './draft';
const request = require('supertest');
const fetch = require('isomorphic-fetch');

const app = require('./app');

describe('test opportunities', () => {
  test('test to check imports', () => {
    const sum = add(1, 2);
    const expectedResult = 3;
    expect(sum).toEqual(expectedResult);
  });

  test('test to check fetch', async () => {
    let timeline;
    const value = await fetch('https://covid19-api.org/api/timeline')
      .then((data) => data.json())
      .then((data) => {
        timeline = data;
        return true;
      });
    expect(timeline[0]).not.toBeUndefined();
    expect(value).toBe(true);
  });
});

describe('test register user', () => {
  test('should return 404 with wrong url', (done) => {
    request(app)
      .post('/api/auth/reghister')
      .send({
        email: 'user@user.user',
        password: 'password'
      })
      .expect(404)
      .end(done);
  });

  test('should return Error with Invalid Email', (done) => {
    request(app)
      .post('/api/auth/register')
      .send({
        email: 'user',
        password: 123456
      })
      .expect(400)
      .end(done);
  });

  test('should return Error with Invalid Password', (done) => {
    request(app)
      .post('/api/auth/register')
      .send({
        email: 'user@user.user',
        password: 12345
      })
      .expect(400)
      .end(done);
  });

  test('should return Error with User with this email already exists', (done) => {
    request(app)
      .post('/api/auth/register')
      .send({
        email: 'qwe@qwe.qwe',
        password: 'password'
      })
      .expect(400)
      .end(done);
  });

  test('should create user for valid entries', (done) => {
    request(app)
      .post('/api/auth/register')
      .send({
        email: 'user@user.user',
        password: 'password'
      })
      .expect(201)
      .end(done);
  });
});

describe('test login user', () => {
  test('should return 404 with wrong url', (done) => {
    request(app)
      .post('/api/auth/logen')
      .send({
        email: 'user@user.user',
        password: 'password'
      })
      .expect(404)
      .end(done);
  });

  test('should return Error with Invalid Email', (done) => {
    request(app)
      .post('/api/auth/login')
      .send({
        email: 'user',
        password: 123456
      })
      .expect(400)
      .end(done);
  });

  test('should return Error when User not found', (done) => {
    request(app)
      .post('/api/auth/login')
      .send({
        email: 'ussser@user.user',
        password: 123456
      })
      .expect(400)
      .end(done);
  });

  test('should return Error when No Password', (done) => {
    request(app)
      .post('/api/auth/login')
      .send({
        email: 'user@user.user'
      })
      .expect(400)
      .end(done);
  });

  test('should login for valid entries', (done) => {
    request(app)
      .post('/api/auth/login')
      .send({
        email: 'user@user.user',
        password: 'password'
      })
      .expect(200)
      .end(done);
  });
});
