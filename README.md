# Playwright Technical Task

A small end-to-end suite running against the public TodoMVC demo app
(`https://demo.playwright.dev/todomvc`). No local app server required —
the tests hit the hosted demo directly.

## Setup

```bash
npm install
npx playwright install
npm test
```

## Your tasks

1. **Debug the failing tests.** Get the suite green. Explain each root
   cause as you go — don't just make it pass.
2. **Enhance the framework.** The setup is intentionally bare. Improve it
   in whatever ways you'd expect from a maintainable suite.
3. **Add CI.** Wire the suite up to run automatically on push / PR.

## Useful commands

```bash
npm test                # run the suite
npm run test:headed     # run with a visible browser
npm run report          # open the last HTML report
npx playwright test --debug   # step through with the inspector
npx playwright test tests/todo.spec.ts:21   # run one test by line
```
