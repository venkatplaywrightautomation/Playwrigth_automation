

Feature: Data driven testing using JSON file

   @DataDriven
   Scenario:  Failed with invalid credentials from json
      Given I Navigate to "https://www.saucedemo.com/"
      When  I Enter Invalid username and Password and click on login button
      Then  I Should see the error message


   @only
   Scenario Outline: Failed with invalid Username and Password
      Given I Navigate to "https://www.saucedemo.com/"
      When  I Enter Invalid username and Password and click on login button for "<index>"
      Then  I Should see the error message for "<index"

      Examples:
         | index |
         | 0     |
         | 1     |
         | 2     |


