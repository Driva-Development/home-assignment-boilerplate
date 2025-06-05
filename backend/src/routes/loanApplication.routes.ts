import { validateRequest } from '../middleware/validateRequest';
import { loanApplicationCreateSchema } from '../schemas/loanApplication';
import { sendCreatedResponse, sendSuccessResponse } from '../utilities/response';

import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/:loanUuid', async (req: Request, res: Response) => {
  sendSuccessResponse(res, {});
});

router.post('/', validateRequest(loanApplicationCreateSchema), async (req: Request, res: Response) => {
  sendCreatedResponse(res, {});
});

export default router;
