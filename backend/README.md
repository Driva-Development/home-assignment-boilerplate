# Driva Home Assignment Backend
A RESTful API service for managing loan applications built with Express.js, TypeScript, and Sequelize ORM.
## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Setup](#environment-setup)

- [Development](#development)
    - [Running the Server](#running-the-server)
    - [Database](#database)
    - [Testing](#testing)
    - [Code Quality](#code-quality)

- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [License](#license)

## Features
- Create and retrieve loan applications
- Input validation using Zod schemas
- Error handling middleware
- Comprehensive test coverage (unit and E2E tests)
- SQLite database integration

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript 
- **ORM**: Sequelize with SQLite
- **Validation**: Zod 
- **Testing**: Jest, SuperTest 
- **Linting/Formatting**: ESLint, Prettier
- **Build Tools**: ts-node, nodemon

## Getting Started
### Prerequisites
- Node.js (LTS version recommended)
- npm or yarn

### Installation
1. Install dependencies:
``` bash
   npm install
```
### Environment Setup
1. Create a file in the root directory: `.env`
``` 
   PORT=3000
   DATABASE_PATH=./DrivaDB.sqllite
   NODE_ENV=development
```
## Development
### Running the Server
For development with hot-reloading:
``` bash
npm run dev
```
For production:
``` bash
npm run build
npm start
```
### Database
The application uses SQLite as its database. The database file will be created automatically at the path specified in your file. `.env`
**Important Note for In-Memory Database**: When running e2e tests, a separate in-memory database has been configured to avoid polluting your DB. This can be changed by altering the `DATABASE_PATH` in `jest.setup.js`

### Testing
The project has both unit and E2E tests:
``` bash
# Run all tests
npm test

# Run unit tests only
npm run test:unit

# Run E2E tests only
npm run test:e2e

# Run tests with coverage
npm run test:coverage
```
### Code Quality
Maintain code quality with linting and formatting:
``` bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Format code with Prettier
npm run format
```
## API Documentation
### Endpoints
#### Loan Applications
- **GET /api/v1/loan-applications/:loanUuid**

- **POST /api/v1/loan-applications**


## Project Structure
``` 
src/
├── __tests__/          # Test files
│   ├── e2e/            # End-to-end tests
│   ├── helpers/        # Test helpers
│   └── unit/           # Unit tests
├── common/             # Common utilities and constants
├── config/             # Application configuration
├── controllers/        # Route controllers
├── dto/                # Data transfer objects
├── middleware/         # Express middleware
├── models/             # Sequelize models
├── repositories/       # Data access layer
├── routes/             # API routes
├── schemas/            # Validation schemas
├── services/           # Business logic
├── utilities/          # Utility functions
└── index.ts            # Application entry point
```
