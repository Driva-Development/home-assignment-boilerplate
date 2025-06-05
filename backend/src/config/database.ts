import { models } from '../models';

import { Sequelize } from '@sequelize/core';
import { SqliteDialect } from '@sequelize/sqlite3';
import dotenv from 'dotenv';

dotenv.config();

// Get database path from environment variables or use a default
const dbPath = process.env.DATABASE_PATH;
// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: dbPath,
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  define: {
    timestamps: true, // Adds createdAt and updatedAt timestamps to every model
    underscored: true // Use snake_case for table names and column names
  },
  pool: process.env.DATABASE_PATH === ':memory:' ? { idle: Infinity, max: 1 } : {},
  models: models
});

export default sequelize;
