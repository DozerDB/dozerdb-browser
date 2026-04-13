<p align="center">
  <img src="./DozerDB_logo.png" width="400" alt="DozerDB">
</p>

<p align="center">
  <em>DozerDB Browser — enhanced graph database UI built on Neo4j Browser</em>
</p>

<p align="center">
  <a href="https://github.com/dozerdb/dozerdb-browser/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-GPLv3-blue?style=for-the-badge" alt="License"></a>
  <a href="#-development"><img src="https://img.shields.io/badge/Node.js-12.4+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"></a>
  <a href="#-development"><img src="https://img.shields.io/badge/Yarn-required-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn"></a>
</p>

<p align="center">
  <a href="https://dozerdb.org"><img src="https://img.shields.io/badge/Get_Started-FF6600?style=for-the-badge&logo=readthedocs&logoColor=white" alt="Get Started"></a>
  <a href="mailto:info@greystonesgroup.com"><img src="https://img.shields.io/badge/Contact_Us-333333?style=for-the-badge&logo=gmail&logoColor=white" alt="Contact Us"></a>
</p>

---

## 📋 About

DozerDB Browser is the graphical user interface for DozerDB. Query, visualize, administer, and monitor your graph database with modern and easy-to-use tools.

This project is a fork of [Neo4j Browser](https://github.com/neo4j/neo4j-browser) with DozerDB-specific enhancements.

![DozerDB Browser Screenshot](./.github/neo4j-browser-screenshot.png)

---

## 📁 Project Structure

Browser has a subproject of reusable components bundled together and exposed as `neo4j-arc`. ESLint is configured to isolate `neo4j-arc` — code in browser can only import from `neo4j-arc` through its aliases, and `neo4j-arc` cannot import code from outside its own folder.

---

## 🛠️ Development

### Prerequisites

- **Node.js** ^12.4.0
- **Yarn** — install with `npm install -g yarn`

### Getting Started

Install dependencies and start the development server at `http://localhost:8080`:

```bash
yarn install
yarn start
```

To run in production mode:

```bash
yarn start-prod
```

---

## 🧪 Testing

### Unit Tests

Runs a linter followed by unit tests:

```bash
yarn test-unit
```

### End-to-End Tests

Runs Cypress e2e tests (requires Docker, ports 7687 and 8080 must be free):

```bash
yarn test-e2e
```

#### Cypress Options

Open the Cypress test runner against a fresh Neo4j installation:

```bash
yarn e2e-open
```

Run against an existing server with a custom password:

```bash
yarn e2e-local-open --env browser-password=<your-password>
```

Available `--env` options:

| Option | Values | Default |
|--------|--------|---------|
| `server` | `3.5`, `4.0`, `4.1`, `4.2`, `4.3` | `4.3` |
| `edition` | `enterprise`, `community`, `aura` | `enterprise` |
| `browser-password` | any string | `newpassword` |
| `include-import-tests` | `true`, `false` | `false` |
| `bolt-url` | bolt URL (without protocol) | `localhost:7687` |

Environment variables (set before running):

| Variable | Description | Default |
|----------|-------------|---------|
| `CYPRESS_E2E_TEST_ENV` | `local` or unset | `undefined` |
| `CYPRESS_BASE_URL` | Browser URL to test | `http://localhost:8080` |

---

## 📞 Support

<p>
  <a href="mailto:info@greystonesgroup.com"><img src="https://img.shields.io/badge/Email_Us-info@greystonesgroup.com-FF6600?style=flat-square&logo=gmail&logoColor=white" alt="Email Us"></a>
  <a href="https://github.com/dozerdb/dozerdb-core#-support"><img src="https://img.shields.io/badge/More_Info-dozerdb--core-333333?style=flat-square&logo=github&logoColor=white" alt="More Info"></a>
</p>

---

<p align="center">
  <sub>&copy; 2026 DozerDB Contributors</sub>
</p>
