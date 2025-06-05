import { HTTP_STATUS } from './common/httpStatus';
import sequelize from './config/database';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './utilities/logger';
import routes from './routes';

import dotenv from 'dotenv';
import express, { Express } from 'express';

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.use('/api/v1', routes);

app.use((req, res, next) => {
  res.status(HTTP_STATUS.NOT_FOUND).send({ message: 'Not Found' });
});

app.use(errorHandler); // Handle all other errors

// Initialize database before starting server
const startServer = async () => {
  await sequelize.sync({ force: true });
  app.listen(port, () => {
    logger.log(`Server running on port ${port}`);
  });
};

startServer();

export default app;
