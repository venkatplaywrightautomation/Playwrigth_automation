


Feature: Feature name

    @smoke
    Scenario: : Scuccess login with valid credentials
        Given I Navigate to "https://www.saucedemo.com/"
        Given I Enter Username "standard_user"
        Given I Enter password "secret_sauce"
        When  click on Login Button
        Then  I Should see the Page containing "Sauce Labs Backpack"



    @regression
    Scenario Outline:  failed with invalid credentials

        Given I Navigate to "https://www.saucedemo.com/"
        Given I Enter Username "<username>"
        Given I Enter password "<password>"
        When  click on Login Button
        Then  I Should see the error message "<error>"


        Examples:
            | username      | password  | error                                                                      |
            | standard_user | venkat    | Epic sadface: Username and password do not match any user in this service |
            | standard_user | venkat234 | Epic sadface: Username and password do not match any user in this service |
            | standard_user | venkat456 | Epic sadface: Username and password do not match any user in this service |

