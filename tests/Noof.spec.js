



import { test, expect } from '@playwright/test';
import { request } from 'http'; 


test('Visit all links using href', async ({ page }) => {
  await page.goto('https://google.co.in/');

  const hrefs = await page.$$eval('a', els => els.map(e => e.href));
  console.log(`Found ${hrefs.length} links`);

  for (const href of hrefs) {
    if (href && href.startsWith('http')) {
      console.log(`🌐 Visiting: ${href}`);
      await page.goto(href,{waitUntil:'domcontentloaded'});
      console.log(`✅ Title: ${await page.title()}`);
    }
  }
});