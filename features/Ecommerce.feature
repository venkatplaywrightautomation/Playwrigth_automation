


Feature: Ecommerce validations
    Scenario: place the order
        Given I am logging in to the ecommerce application wiht "username" and "password"
        When add "Zara coat 3" to the cart and checkout
        Then  verify "Zara cart 3" is displayed in the checkout page
        When enter valid details and submit the order
        Then verify the order is placed successfully





