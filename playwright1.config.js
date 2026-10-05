


import { chromium, defindeconfig, devices } from '@playwright/test'
import { worker, workers } from 'cluster'


import dotenv from 'dotenv'
import { use } from 'react'


    dotenv.config({

        path: process.env.TestEnv ? `./envfiles/.env.${process.env.TestEnv}` : `'./envfiles/.env.qa'`




    })


    export default defindeconfig({

        testdDir: './tests',
        workers: 2,
        timeoout: 30000,
        reporte: [[html]],
        use: {

        },


        projects: [

            name: 'chrpmium',
        use: { ...devices['Desktop Chrome'] },

    ]
}
)


