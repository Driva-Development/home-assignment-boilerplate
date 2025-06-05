import app from '../../';
import { setupTestDatabase, teardownTestDatabase } from '../helpers/dbSetup';
import { EMPTY_UUID } from '../helpers/emptyUuid';

import request from 'supertest';

describe('Loan Application API Endpoints', () => {
  beforeAll(async () => {
    await setupTestDatabase();
  });

  afterAll(async () => {
    await teardownTestDatabase();
  });

  describe(`GET /api/v1/loan-applications/${EMPTY_UUID}`, () => {
    it('', async () => {
      const response = await request(app).get(`/api/v1/loan-applications/${EMPTY_UUID}`);
      expect(response).toBeDefined();
    });
  });
});
