// Generated from: tests\Features\login.feature
import { test } from "playwright-bdd";

test.describe('Feature name', () => {

  test(': Scuccess login with valid credentials', { tag: ['@smoke'] }, async ({ Given, When, Then, page }) => { 
    await Given('I Navigate to "https://www.saucedemo.com/"', null, { page }); 
    await Given('I Enter Username "standard_user"', null, { page }); 
    await Given('I Enter password "secret_sauce"', null, { page }); 
    await When('click on Login Button', null, { page }); 
    await Then('I Should see the Page containing "Sauce Labs Backpack"', null, { page }); 
  });

  test.describe('failed with invalid credentials', () => {

    test('Example #1', { tag: ['@regression'] }, async ({ Given, When, Then, page }) => { 
      await Given('I Navigate to "https://www.saucedemo.com/"', null, { page }); 
      await Given('I Enter Username "standard_user"', null, { page }); 
      await Given('I Enter password "venkat"', null, { page }); 
      await When('click on Login Button', null, { page }); 
      await Then('I Should see the error message "Epic sadface: Username and password do not match any user in this service"', null, { page }); 
    });

    test('Example #2', { tag: ['@regression'] }, async ({ Given, When, Then, page }) => { 
      await Given('I Navigate to "https://www.saucedemo.com/"', null, { page }); 
      await Given('I Enter Username "standard_user"', null, { page }); 
      await Given('I Enter password "venkat234"', null, { page }); 
      await When('click on Login Button', null, { page }); 
      await Then('I Should see the error message "Epic sadface: Username and password do not match any user in this service"', null, { page }); 
    });

    test('Example #3', { tag: ['@regression'] }, async ({ Given, When, Then, page }) => { 
      await Given('I Navigate to "https://www.saucedemo.com/"', null, { page }); 
      await Given('I Enter Username "standard_user"', null, { page }); 
      await Given('I Enter password "venkat456"', null, { page }); 
      await When('click on Login Button', null, { page }); 
      await Then('I Should see the error message "Epic sadface: Username and password do not match any user in this service"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I Navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://www.saucedemo.com/\"","children":[{"start":15,"value":"https://www.saucedemo.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I Enter Username \"standard_user\"","stepMatchArguments":[{"group":{"start":17,"value":"\"standard_user\"","children":[{"start":18,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given I Enter password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":17,"value":"\"secret_sauce\"","children":[{"start":18,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When click on Login Button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I Should see the Page containing \"Sauce Labs Backpack\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Sauce Labs Backpack\"","children":[{"start":34,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":28,"tags":["@regression"],"steps":[{"pwStepLine":17,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given I Navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://www.saucedemo.com/\"","children":[{"start":15,"value":"https://www.saucedemo.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I Enter Username \"standard_user\"","stepMatchArguments":[{"group":{"start":17,"value":"\"standard_user\"","children":[{"start":18,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given I Enter password \"venkat\"","stepMatchArguments":[{"group":{"start":17,"value":"\"venkat\"","children":[{"start":18,"value":"venkat","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When click on Login Button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then I Should see the error message \"Epic sadface: Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Epic sadface: Username and password do not match any user in this service\"","children":[{"start":32,"value":"Epic sadface: Username and password do not match any user in this service","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":29,"tags":["@regression"],"steps":[{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given I Navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://www.saucedemo.com/\"","children":[{"start":15,"value":"https://www.saucedemo.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I Enter Username \"standard_user\"","stepMatchArguments":[{"group":{"start":17,"value":"\"standard_user\"","children":[{"start":18,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given I Enter password \"venkat234\"","stepMatchArguments":[{"group":{"start":17,"value":"\"venkat234\"","children":[{"start":18,"value":"venkat234","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When click on Login Button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then I Should see the error message \"Epic sadface: Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Epic sadface: Username and password do not match any user in this service\"","children":[{"start":32,"value":"Epic sadface: Username and password do not match any user in this service","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":30,"tags":["@regression"],"steps":[{"pwStepLine":33,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given I Navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://www.saucedemo.com/\"","children":[{"start":15,"value":"https://www.saucedemo.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I Enter Username \"standard_user\"","stepMatchArguments":[{"group":{"start":17,"value":"\"standard_user\"","children":[{"start":18,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given I Enter password \"venkat456\"","stepMatchArguments":[{"group":{"start":17,"value":"\"venkat456\"","children":[{"start":18,"value":"venkat456","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When click on Login Button","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then I Should see the error message \"Epic sadface: Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Epic sadface: Username and password do not match any user in this service\"","children":[{"start":32,"value":"Epic sadface: Username and password do not match any user in this service","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end