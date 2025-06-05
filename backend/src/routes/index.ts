import loanApplicationRoutes from './loanApplication.routes';

import express from 'express';

const router = express.Router();

router.use('/loan-applications', loanApplicationRoutes);

export default router;
