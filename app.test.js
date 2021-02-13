const request = require('supertest');
const app = require('./app');

describe('test registration user', () => {
  test('should return 404 with wrong url', () => new Promise((done) => {
    request(app)
      .post('/api/auth/reghister')
      .send({
        email: 'user@user.user',
        password: 'password',
      })
      .expect(404)
      .end(done);
  }));

  test('should return Error with Invalid Email (no @ in email)', () => new Promise((done) => {
    request(app)
      .post('/api/auth/register')
      .send({
        email: 'user',
        password: 123456,
      })
      .expect(400)
      .end(done);
  }));

  test('should return Error with Invalid Email (no . in email)', () => new Promise((done) => {
    request(app)
      .post('/api/auth/register')
      .send({
        email: 'user@user',
        password: 123456,
      })
      .expect(400)
      .end(done);
  }));

  test('should return Error with Invalid Email (space in email)', () => new Promise((done) => {
    request(app)
      .post('/api/auth/register')
      .send({
        email: 'user@us er.user',
        password: 123456,
      })
      .expect(400)
      .end(done);
  }));

  test('should return Error with Invalid Password', () => new Promise((done) => {
    request(app)
      .post('/api/auth/register')
      .send({
        email: 'user@user.user',
        password: 12345,
      })
      .expect(400)
      .end(done);
  }));

  test('should return Error with No Password', () => new Promise((done) => {
    request(app)
      .post('/api/auth/register')
      .send({
        email: 'user@user.user',
      })
      .expect(400)
      .end(done);
  }));

  test('should return Error with User with this email already exists', () => new Promise((done) => {
    request(app)
      .post('/api/auth/register')
      .send({
        email: 'kovbenya.alexander1@gmail.com',
        password: 'password',
      })
      .expect(400)
      .end(done);
  }));

  test('should create user for valid entries', () => new Promise((done) => {
    request(app)
      .post('/api/auth/register')
      .send({
        email: 'user@user.user',
        password: 'password',
      })
      .expect(201)
      .end(done);
  }));
});

describe('test login user', () => {
  test('should return 404 with wrong url', () => new Promise((done) => {
    request(app)
      .post('/api/auth/logen')
      .send({
        email: 'user@user.user',
        password: 'password',
      })
      .expect(404)
      .end(done);
  }));

  test('should return Error with Invalid Email (no @ in email)', () => new Promise((done) => {
    request(app)
      .post('/api/auth/login')
      .send({
        email: 'user',
        password: 'password',
      })
      .expect(400)
      .end(done);
  }));

  test('should return Error with Invalid Email (no . in email)', () => new Promise((done) => {
    request(app)
      .post('/api/auth/login')
      .send({
        email: 'user@user',
        password: 'password',
      })
      .expect(400)
      .end(done);
  }));

  test('should return Error with Invalid Email (use UpperCase except LowerCase)', () => new Promise((done) => {
    request(app)
      .post('/api/auth/login')
      .send({
        email: 'User@user.user',
        password: 'password',
      })
      .expect(400)
      .end(done);
  }));

  test('should return Error when User not found', () => new Promise((done) => {
    request(app)
      .post('/api/auth/login')
      .send({
        email: 'ussser@user.user',
        password: 'password',
      })
      .expect(400)
      .end(done);
  }));

  test('should return Error when No Password', () => new Promise((done) => {
    request(app)
      .post('/api/auth/login')
      .send({
        email: 'user@user.user',
      })
      .expect(400)
      .end(done);
  }));

  test('should return Error for Wrong Password', () => new Promise((done) => {
    request(app)
      .post('/api/auth/login')
      .send({
        email: 'user@user.user',
        password: 'pasword',
      })
      .expect(400)
      .end(done);
  }));

  test('should return Error for Wrong Password (use UpperCase except LowerCase)', () => new Promise((done) => {
    request(app)
      .post('/api/auth/login')
      .send({
        email: 'user@user.user',
        password: 'PASSWORD',
      })
      .expect(400)
      .end(done);
  }));

  test('should login for valid entries', () => new Promise((done) => {
    request(app)
      .post('/api/auth/login')
      .send({
        email: 'user@user.user',
        password: 'password',
      })
      .expect(200)
      .end(done);
  }));
});

describe('user delete test', () => {
  test('should return 404 with wrong url', () => new Promise((done) => {
    request(app)
      .delete('/api/auth/logen')
      .send({
        email: 'user@user.user',
        password: 'password',
      })
      .expect(404)
      .end(done);
  }));

  test('should return Error with Invalid Email', () => new Promise((done) => {
    request(app)
      .delete('/api/auth/login')
      .send({
        email: 'user',
        password: 'password',
      })
      .expect(400)
      .end(done);
  }));

  test('should return Error when User not found', () => new Promise((done) => {
    request(app)
      .delete('/api/auth/login')
      .send({
        email: 'ussser@user.user',
        password: 'password',
      })
      .expect(400)
      .end(done);
  }));

  test('should return Error when No Password', () => new Promise((done) => {
    request(app)
      .delete('/api/auth/login')
      .send({
        email: 'user@user.user',
      })
      .expect(400)
      .end(done);
  }));

  test('should delete user', () => new Promise((done) => {
    request(app)
      .delete('/api/auth/login')
      .send({
        email: 'user@user.user',
        password: 'password',
      })
      .expect(200)
      .end(done);
  }));
});
