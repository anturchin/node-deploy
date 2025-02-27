import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect({ message: 'Hello from nest.js!' });
  });

  it('/data (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/data')
      .send({ name: 'John' })
      .expect(201);

    expect(response.body).toEqual({
      message: 'Data received!',
      received: { name: 'John' },
    });
  });
});
