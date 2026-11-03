# SauceDemo end-user workflow test plan

## Application Overview

Explore the SauceDemo storefront UI and build a test plan for the five most common end-user actions in this e-commerce demo: login, browse and sort products, add items to cart, complete checkout, and logout. The plan assumes a fresh browser session and no pre-existing cart state.

## Test Scenarios

### 1. SauceDemo core shopping flow

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login to the application

**File:** `tests/sauce-demo/login.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/ in a fresh browser session.
    - expect: The login page loads and shows the Swag Labs brand and login form.
  2. Enter username standard_user and password secret_sauce.
    - expect: The username and password fields are populated correctly.
  3. Click the Login button.
    - expect: The user lands on the inventory page and the page title remains Swag Labs.
  4. Verify the Products header is visible after login.
    - expect: The storefront product catalog is displayed, confirming successful authentication.

#### 1.2. Browse and sort the product catalog

**File:** `tests/sauce-demo/catalog.spec.ts`

**Steps:**
  1. Review the visible product cards on the inventory page.
    - expect: Each product card includes an image, title, description, price, and Add to cart action.
  2. Use the Sort Products dropdown to change sorting from Name (A to Z) to Price (low to high).
    - expect: The displayed order of products changes according to the selected sort option.
  3. Open the detail view for one product.
    - expect: The selected product detail page loads with the matching name, price, description, and Add to cart button.
  4. Use the Back to products control to return to the catalog.
    - expect: The user returns to the inventory page without losing the current session.

#### 1.3. Add products to cart and review cart

**File:** `tests/sauce-demo/cart.spec.ts`

**Steps:**
  1. Select at least two products from the catalog and click Add to cart.
    - expect: The cart count increases and each product switches to a Remove state.
  2. Open the cart from the cart icon in the page header.
    - expect: The cart page lists the selected items, their prices, and a subtotal summary.
  3. Confirm that the chosen items and quantities are correct before checkout.
    - expect: The cart contents match the products selected by the shopper.
  4. Click Continue Shopping or proceed directly to Checkout.
    - expect: The user can either continue browsing or move forward with the purchase flow.

#### 1.4. Complete checkout with valid information

**File:** `tests/sauce-demo/checkout.spec.ts`

**Steps:**
  1. From the cart page, click Checkout.
    - expect: The user is navigated to the checkout information form.
  2. Fill in first name, last name, and postal code with valid data.
    - expect: The form accepts the values and the Continue button is enabled.
  3. Click Continue to review the order.
    - expect: The overview page shows the selected products, payment information placeholder, and total cost.
  4. Click Finish to confirm the purchase.
    - expect: A confirmation page appears with a success message indicating the order was completed.

#### 1.5. Log out of the session

**File:** `tests/sauce-demo/logout.spec.ts`

**Steps:**
  1. Open the app menu from the hamburger icon in the page header.
    - expect: The navigation menu expands to show All Items, About, Logout, and Reset App State.
  2. Select Logout.
    - expect: The user is signed out and returned to the login page.
  3. Attempt to access the inventory page again using a direct URL or browser navigation.
    - expect: The site redirects the user back to the login page because the session is no longer active.
  4. Verify the session is ended cleanly.
    - expect: The user must log in again before they can access the storefront.
