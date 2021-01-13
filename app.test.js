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
        password: 123
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
});

