# Driva Home Assignment Frontend
An app for submitting loan applications built with React + Vite, TypeScript, React Router DOM, React Hook Form, Zod and Axios. Tested using cypress.
## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Setup](#environment-setup)

- [Development](#development)
    - [Running the Frontend](#running-the-frontend)
    - [Testing](#testing)
    - [Code Quality](#code-quality)

## Features
- Multi-step journey with forms for loan details, personal details and quote results
- Input validation using Zod schemas
- Error handling
- Comprehensive test coverage (cypress tests)
- Integration with backend solution

## Tech Stack
- **Front-end**: React + Vite
- **Language**: TypeScript
- **Forms**: react-hook-form
- **Validation**: zod
- **HTTP Client**: axios
- **Testing**: cypress
- **Linting/Formatting**: ESLint, Prettier

## Getting Started
### Prerequisites
- npm or yarn

### Installation
1. Install dependencies:
``` bash
   npm install
```
### Environment Setup
1. Create a file in the root directory: `.env`. Use this environment variable when making axios requests.
``` 
   VITE_BACKEND_HOST=http://localhost:3000
```

## Development
### Running the Frontend
For development with hot-reloading:
``` bash
npm run dev
```

### Testing
The project has both unit and E2E tests:
``` bash
# Run all tests
npm run cypress:open

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
