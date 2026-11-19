# Web Practice

Coursework and practice for a web development course. It runs from plain HTML/CSS/JavaScript labs through jQuery, React and Node/Express/MongoDB, and ends with a front-end semester project. Most folders are independent of each other. The repo also holds lab reports and assignments (`.docx`), lecture slides (`mids/*.pdf`) and a CV page.

## Tech stack (varies by folder)

- HTML, CSS, JavaScript, jQuery
- React: Vite (React 19) and Create React App (React 18)
- Tailwind CSS, GSAP, React Router, react-icons (Bit Brainiac project)
- Node.js, Express, Mongoose / MongoDB, Axios

## What's inside

| Path | Description |
|------|-------------|
| `lab2.html`, `lab3*.html`, `lab5.*`, `lab6*.*`, `lab7task1.html`, `task1lab2.html`, `html.html`, `34re.html` | Early HTML/CSS/JS lab tasks |
| `umar-ahad-usmani-cv.html`, `cv.css` | CV page in HTML/CSS |
| `lab8/` | jQuery / JS tasks: form validation, jQuery functions, calculator, quote generator |
| `lab9/react-basic/` | First Vite + React app (props and a counter component) |
| `webhooks/webhooks/` | Vite + React app that uses hooks to fetch data from public APIs (fakestoreapi.com, genderize.io) |
| `lab13backend/` | Express + Mongoose `/users` CRUD API (work in progress: `index.js` mixes `require`/`import` and the MongoDB connection string is left empty) |
| `lab14/` | MERN product CRUD app: Express/Mongoose backend (`/products`) and a CRA + Axios frontend. Has its own README |
| `project/html bitbraniac front end/` | "Bit Brainiac" learning site in plain HTML/CSS/JS, with a keyword-based CS Q&A chatbot |
| `project/bit-braniac/bit-brainic-web/` | The same project rebuilt with Vite + React + Tailwind (Home, About, Contact, Chat pages) |
| `JavaScriptProjects/` (+ `.zip`) | A copy of the "50 JavaScript Projects" collection (has its own README and LICENSE) |
| `mids/` | Midterm study material: lecture PDFs, practice JS and example HTML pages |
| `hello_world.ipynb` | A small Jupyter notebook |

## Running

**Static pages:** open the `.html` file in a browser.

**Vite React apps** (`lab9/react-basic`, `webhooks/webhooks`, `project/bit-braniac/bit-brainic-web`):

```bash
cd <app-folder>
npm install
npm run dev
```

**Lab 14 (MERN CRUD):**

```bash
cd lab14/backend && npm install && npm start    # http://localhost:5000
cd lab14/frontend && npm install && npm start   # http://localhost:3000
```

The backend reads `MONGODB_URI` and an optional `PORT` from a `.env` file in `lab14/backend/`.

**lab13backend:** `npm install`, then `npm start` (or `npm run dev` with nodemon). The server listens on port 3000. It needs the fixes noted above before it will run.
