// Generated from: tests\Features\login-dd.feature
import { test } from "playwright-bdd";

test.describe('Data driven testing using JSON file', () => {

  test('Failed with invalid credentials from json', { tag: ['@DataDriven'] }, async ({ Given, When, Then, page }) => { 
    await Given('I Navigate to "https://www.saucedemo.com/"', null, { page }); 
    await When('I Enter Invalid username and Password and click on login button', null, { page }); 
    await Then('I Should see the error message', null, { page }); 
  });

  test.describe.only('Failed with invalid Username and Password', () => {

    test('Example #1', { tag: ['@only'] }, async ({ Given, When, Then, page }) => { 
      await Given('I Navigate to "https://www.saucedemo.com/"', null, { page }); 
      await When('I Enter Invalid username and Password and click on login button for "0"', null, { page }); 
      await Then('I Should see the error message for "<index"', null, { page }); 
    });

    test('Example #2', { tag: ['@only'] }, async ({ Given, When, Then, page }) => { 
      await Given('I Navigate to "https://www.saucedemo.com/"', null, { page }); 
      await When('I Enter Invalid username and Password and click on login button for "1"', null, { page }); 
      await Then('I Should see the error message for "<index"', null, { page }); 
    });

    test('Example #3', { tag: ['@only'] }, async ({ Given, When, Then, page }) => { 
      await Given('I Navigate to "https://www.saucedemo.com/"', null, { page }); 
      await When('I Enter Invalid username and Password and click on login button for "2"', null, { page }); 
      await Then('I Should see the error message for "<index"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\login-dd.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@DataDriven"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I Navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://www.saucedemo.com/\"","children":[{"start":15,"value":"https://www.saucedemo.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I Enter Invalid username and Password and click on login button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I Should see the error message","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":20,"tags":["@only"],"steps":[{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I Navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://www.saucedemo.com/\"","children":[{"start":15,"value":"https://www.saucedemo.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I Enter Invalid username and Password and click on login button for \"0\"","stepMatchArguments":[{"group":{"start":68,"value":"\"0\"","children":[{"start":69,"value":"0","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I Should see the error message for \"<index\"","stepMatchArguments":[{"group":{"start":35,"value":"\"<index\"","children":[{"start":36,"value":"<index","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":21,"tags":["@only"],"steps":[{"pwStepLine":21,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I Navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://www.saucedemo.com/\"","children":[{"start":15,"value":"https://www.saucedemo.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I Enter Invalid username and Password and click on login button for \"1\"","stepMatchArguments":[{"group":{"start":68,"value":"\"1\"","children":[{"start":69,"value":"1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I Should see the error message for \"<index\"","stepMatchArguments":[{"group":{"start":35,"value":"\"<index\"","children":[{"start":36,"value":"<index","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":22,"tags":["@only"],"steps":[{"pwStepLine":27,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I Navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://www.saucedemo.com/\"","children":[{"start":15,"value":"https://www.saucedemo.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I Enter Invalid username and Password and click on login button for \"2\"","stepMatchArguments":[{"group":{"start":68,"value":"\"2\"","children":[{"start":69,"value":"2","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I Should see the error message for \"<index\"","stepMatchArguments":[{"group":{"start":35,"value":"\"<index\"","children":[{"start":36,"value":"<index","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end