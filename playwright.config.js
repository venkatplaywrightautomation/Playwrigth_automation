// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
//import globalSetup from './tests/globalsetup';
import dotenv from 'dotenv';
import globalsetup from './globalsetup';




dotenv.config({
 // path:`./envfiles/.env.${process.env.testenv}`
 path: process.env.testenv ? `./envfiles/.env.${process.env.testenv}` : `'./envfiles/.env.qa'`
 
})



  //const workers=process.env.CI ? 4 :undefined
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  //globalSetup:'./globalsetup',

 // globalSetup:'./pages/globalsetup.js',
 globalSetup: "./globalsetup.js",

  testDir: './tests',
  
  
  /* Run tests in files in parallel */
 // fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  //retries: 2,
  


  
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
  workers: 2,
//testMatch:'/Webtable.spec.js*',
//testIgnore: '/Webtable.spec.js/',
  //workers: 3,
  //maxFailures: 2,
//testMatch: /.*(spec|test)\.(ts|js)/,
//testMatch: /.*(spec|test)\.(ts|js)/,

  
//storageState: 'testdata/auth.json',

  /* Set global timeout for each test */
  timeout: 30 * 1000,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: 'html',
  reporter: [['html',],['allure-playwright'] ],
  //reporter: [['html',{open:''}]]
  
  /*
   Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    

   

    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: 'on-first-retry',
    // headless:false,
    // screenshot:'on',
    storageState: './Loginauth.json',
    ignoreHTTPSErrors: true,
    permissions:['geolocation'],
    geolocation:{latitude: 12.9716, longitude: 77.5946},
    //video:'on',
    //outputDir:'./test-results/',
    //channel: 'chrome',
    //headless: false,
   // trace: 'on-first-retry'
    
// trace:process.env.CI ? 'retain-on-failure' : 'off',
//     viewport: { width: 1280, height: 720 },
//     actionTimeout: 0,
//     ignoreHTTPSErrors: true,
    //trace: 'on-first-retry',
    //timezoneId: 'UTC',
//storageState:'testdata/auth.json'
    
  },

  /* Configure projects for major browsers */
  projects: [


    {
      name: 'chromium',
    

     // dependencies: ['setup'],
    use: { ...devices['Desktop Chrome'] ,
      deviceScaleFactor:undefined,
      viewport: null,
    
      //headless: false,
    launchOptions:{
      args:[`--start-maximized`]
    },
     
      },

      
   // use:{browserName:'chromium',channel:'chrome'}

    
    },

  

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
   
    // },



    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },



    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },

    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

