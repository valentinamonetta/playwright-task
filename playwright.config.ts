import { defineConfig } from '@playwright/test';

// NOTE: deliberately minimal. There is plenty here a candidate might improve.
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: process.env.CI ? 1 : 0,
  reporter: 'html',

  use: {
    baseURL: 'https://demo.playwright.dev',
    headless: true,
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
});
