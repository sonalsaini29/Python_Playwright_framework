import { test, expect } from '@playwright/test';

test('has title on', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.locator('.tabs > li:nth-child(2)').first().click();
  await page.locator('div').filter({ hasText: /^npmyarnpnpmnpx playwright testyarn playwright testpnpm exec playwright test$/ }).getByRole('tab').nth(2).click();
  await page.getByRole('link', { name: 'CI GitHub Actions' }).click();
  await page.getByRole('link', { name: 'Setting up GitHub Actions', exact: true }).click();
  await page.getByLabel('Switch between dark and light').click();
  await page.getByRole('link', { name: 'Generating tests' }).click();
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').fill('locator ');
  await page.getByRole('option', { name: 'Locators', exact: true }).getByRole('link').click();
  await page.locator('li').filter({ hasText: 'page.getByRole() to locate by' }).getByRole('link').click();
});

test('verify the load option', async({page}) => {
  await page.goto('https://www.nuskin.com/de_DE/home');
});

