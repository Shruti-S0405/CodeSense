## CodeSense

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-react.svg)](https://forthebadge.com)


CodeSense is a *_full-stack project_* that gives Summary for the code that you provide.

![GitHub last commit](https://img.shields.io/github/last-commit/Shruti-S0405/CodeSense)
![GitHub License](https://img.shields.io/github/license/Shruti-S0405/CodeSense)


### Tech Stack

![cf](https://skillicons.dev/icons?i=js,react,vite,css)

- Frontend: 
    - React
    - Vite
    - CSS

![cf](https://skillicons.dev/icons?i=nodejs,workers)

- Backend:
    - Node.js
    - Hono
    - Gemini
    - Workers

![cf](https://skillicons.dev/icons?i=cloudflare,workers)

- Deployment:
    - Cloudflare Pages
    - Cloudflare Workers
    - Wrangler

### Project Structure

```md
.
├── .github/
│   └── workflows -> Github Actions CI/CD Workflows
├── api/
│   ├── index.js -> api entrypoint
│   ├── gemini.js -> function to call gemini api
│   └── config.js -> config store
├── app/
│   ├── public -> Favicon.ico
│   └── src/
│       ├── components -> React Components
│       ├── pages/
│       │   └── Home.jsx -> Home page of web app
│       └── assets -> Project Assets
└── turbo.json -> turbo repo config
```

### Deployment Stack

- Cloudflare Pages

```bash
cd app && pnpm run deploy
```
- Cloudflare Workers

```bash
cd api && pnpm run deploy
```

### Project Setup

- Clone the repository

```bash
git clone https://github.com/Shruti-S0405/code-summarize.git
```
- Install dependencies

```bash
pnpm install
```
- Start the development server

```bash
pnpm dev
```

> Note: Add "GEMINI_API_KEY" to "api/.dev.vars" to run the backend server locally. Also, add "VITE_API_URL" to "app/.env.local" to run the frontend server locally.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
