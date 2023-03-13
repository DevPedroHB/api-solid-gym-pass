<h1 align="center">API GymPass</h1>

<p align="center">
  GymPass API is a gym management platform that provides endpoints for user creation, gym search, check-ins and related metrics.
</p>

<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-services">Services</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-packages">Packages</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-features">Features</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-links">Links</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-versioning">Versioning</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

## 🚀 Technologies

Here are the technologies used in this project.

- TypeScript 4.9.5
- NodeJS 18.14.2
- Fastify 4.14.1
- Vitest 0.29.2
- Prisma 4.11.0

## 📋 Services

Here are the services used in this project.

- [GitHub](https://github.com/)

## 📦 Packages

Here are the production packages used in this project.

- <b>@fastify/cookie</b> -> Plugin for the Fastify framework that allows developers to set, get and delete HTTP cookies in web applications.
- <b>bcryptjs</b> -> Library that uses a secure hash function based on the bcrypt algorithm to transform text into an encrypted hash.
- <b>dayjs</b> -> Date and time manipulation library for JavaScript.
- <b>dotenv</b> -> Used to load environment variables from an .env file into a Node.js project.
- <b>zod</b> -> Used for data validation in JavaScript.

## 💻 Getting started

Here are the commands and steps on how to start the project.

### Dependency

- NodeJS
- NPM (Package manager of your choice)

### Steps

```bash
# install the dependencies using a package manager, the one used in the project was NPM.
npm install

# To start the project on your machine using NPM.
npm run dev

# To build the project using NPM.
npm run build

# To run the project in production using NPM.
npm run start

# To format code using configured eslint.
npm run lint

# Runs the automated tests present in the 'src/use-cases' folder with continuous monitoring of code changes.
npm run test:watch

# Run the 'test:create-prisma-environment' and 'test:install-prisma-environment' scripts before running the vitest package integration tests.
npm run pretest:e2e

# Runs the integration tests present in the 'src/http' folder with continuous monitoring of code changes.
npm run test:e2e:watch

# Runs the automated tests present in the 'src/use-cases' folder and displays code coverage using the vitest package.
npm run test:coverage

# Run the interfaced tests using the vitest package.
npm run test:ui
```

## 🔥 Features

Here are the main features of the project.

- Functional Requirements:
  - [x] It must be possible to register;
  - [x] It must be possible to authenticate;
  - [x] It must be possible to get the profile of a logged in user;
  - [x] It must be possible to obtain the number of check-ins performed by the logged in user;
  - [x] It must be possible for the user to obtain his check-in history;
  - [x] It must be possible for the user to search for nearby gyms (up to 10km);
  - [x] It should be possible for the user to search for gyms by name;
  - [x] It must be possible for the user to check-in at a gym;
  - [x] It must be possible to validate a user's check-in;
  - [x] It must be possible to register a gym;
- Business Rules:
  - [x] The user must not be able to register with a duplicate email;
  - [x] The user cannot make 2 check-ins on the same day;
  - [x] The user cannot check-in if he is not close (100m) to the gym;
  - [x] The check-in can only be validated up to 20 minutes after being created;
  - [x] The check-in can only be validated by administrators;
  - [x] The academy can only be registered by administrators;
- Non-Functional Requirements:
  - [x] User password must be encrypted;
  - [x] The application data must be persisted in a PostgreSQL database;
  - [x] All data lists need to be paginated with 20 items per page;
  - [x] The user must be identified by a JWT (JSON Web Token);
- Endpoints:
  - Users:
    - POST /users: creation of a new user.
    - POST /sessions: user authentication.
    - PATCH /token/refresh: JWT token refresh.
    - GET /me: obtaining logged user information.
  - Gyms:
    - GET /gyms/search: search for gyms by name.
    - GET /gyms/nearby: search for nearby gyms.
    - POST /gyms: creation of a new gym (only for administrators).
  - Check ins:
    - GET /check-ins/history: obtaining the logged-in user's check-ins history.
    - GET /check-ins/metrics: obtaining metrics related to check-ins.
    - POST /gyms/:gymId/check-ins: creation of a new check-in in a gym.
    - PATCH /check-ins/:checkInId/validate: validation of a check-in (only for administrators).

## 📎 Links

- Deploy on [](): Coming soon.
- Repository: https://github.com/DevPedroHB/api-solid-gym-pass

## 🔰 Versioning

Here are the versions of the parts of the project.

- API -> 1.0.0

## :memo: License

This project is licensed under the MIT license.

---

Made with ♥ by Pedro Henrique 🚀 [Never stop learning!](https://github.com/DevPedroHB)
