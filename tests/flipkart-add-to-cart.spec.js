const { test, expect } = require('@playwright/test');

const PRODUCT = process.env.PRODUCT || 'wireless mouse';

const selectors = {
  closeModal: ['button:has-text("✕")', 'button[aria-label="Close"]', 'button._2KpZ6l._2doB4z'],
  searchInput: ['input[name="q"]', 'input[title*="Search"]', 'input[type="search"]'],
  productLink: ['a:has(img)', 'a[href*="/p/"]']
};

test('search and add product to cart (non-hardcoded)', async ({ page, context }) => {
  await page.goto('https://www.flipkart.com', { waitUntil: 'domcontentloaded' });

  // close login modal if present (try multiple fallbacks)
  for (const sel of selectors.closeModal) {
    const btn = page.locator(sel).first();
    if (await btn.count()) {
      await btn.click().catch(() => {});
      break;
    }
  }

  // find search input using several reasonable fallbacks
  let input;
  for (const sel of selectors.searchInput) {
    const loc = page.locator(sel).first();
    if (await loc.count()) { input = loc; break; }
  }
  if (!input) throw new Error('Search input not found — update selectors');
  await input.fill(PRODUCT);
  await input.press('Enter');

  // wait for results to load
  await page.waitForLoadState('networkidle');

  const productAnchor = page.locator(selectors.productLink.join(',')).first();
  await expect(productAnchor).toBeVisible({ timeout: 10000 });

  // open product page (handle either same-tab or new-tab)
  const newPagePromise = context.waitForEvent('page').catch(() => null);
  await productAnchor.click().catch(() => {});
  const newPage = await newPagePromise;
  const p = newPage || page;
  await p.waitForLoadState('domcontentloaded');

  // capture product title (best-effort using headings)
  let title = '';
  try {
    const titleLoc = p.locator('h1, h2').first();
    if (await titleLoc.count()) title = (await titleLoc.innerText()).trim();
  } catch (e) {}

  // click Add to cart using accessible name; fallback to text-search
  const addBtn = p.getByRole('button', { name: /add to cart/i });
  if (await addBtn.count()) {
    await addBtn.click();
  } else {
    const alt = p.locator('button').filter({ hasText: /add to cart/i }).first();
    if (await alt.count()) await alt.click();
    else throw new Error('Add to cart button not found — update selectors');
  }

  // navigate to cart and assert product presence (use captured title when possible)
  await p.goto('https://www.flipkart.com/viewcart', { waitUntil: 'domcontentloaded' });
  if (title) {
    await expect(p.locator(`text=${title}`)).toBeVisible({ timeout: 10000 });
  } else {
    await expect(p.getByRole('button', { name: /remove/i })).toBeVisible({ timeout: 10000 });
  }
});
