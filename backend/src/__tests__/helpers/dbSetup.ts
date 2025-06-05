import sequelize from '../../config/database';
import { LoanApplicationModel } from '../../models/loanApplication.model';

import { EMPTY_UUID } from './emptyUuid';

export async function setupTestDatabase() {
  await sequelize.sync({ force: true });

  await LoanApplicationModel.create({
    loanUuid: EMPTY_UUID
  });
}

export async function teardownTestDatabase() {
  await sequelize.close();
}
