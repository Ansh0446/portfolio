# My personal website

Hey there! Thanks for visiting the source code of my personal website 😄

This portfolio started as an adaptation of an open-source Next.js
template, then had every section — content, story, and data — rebuilt
around my own background in AI & Data Science.

## Getting started

```bash
yarn install
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

- `yarn dev` — start the local dev server
- `yarn build` — build the static site (outputs to `out/`)
- `yarn lint` / `yarn stylelint` — lint JS/TS and CSS
- `yarn test` — run the Playwright end-to-end suite

## Before you deploy

A few things are placeholders and worth double-checking:

- **Social links** (`consts/socials.const.ts`) — point these at your
  real GitHub, LinkedIn, and LeetCode profiles.
- **Project repos** (`components/sections/Projects/projects.const.tsx`
  and the `getStaticProps` call in `pages/index.tsx`) — point `repo`
  and `owner` at your real GitHub repositories so the star-count
  badges populate at build time. If a repo doesn't exist yet, the
  badge is simply skipped.
- **Contact form endpoint** — set `NEXT_PUBLIC_CONTACT_ENDPOINT` in
  your environment (see `.env.example`) to a working serverless
  function, or update `components/EmailForm/EmailForm.tsx` to use
  your preferred contact method.
- **Domain** — update the `og:url` / `twitter:domain` meta tags in
  `pages/index.tsx` once you know where this will be hosted.
