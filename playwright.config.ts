export default defineConfig({
  testDir: './tests',

  use: {
    browserName: 'chromium',
    headless: true,
    testIdAttribute: 'data-test'
  }
});