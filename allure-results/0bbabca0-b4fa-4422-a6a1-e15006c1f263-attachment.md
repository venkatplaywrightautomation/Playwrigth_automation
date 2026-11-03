# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Sample3.spec.js >> data train 
- Location: tests\Sample3.spec.js:230:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e4]:
        - link "Logo" [ref=e6] [cursor=pointer]:
          - /url: /
          - img "Logo" [ref=e7]
        - generic [ref=e9]:
          - link "Train Tickets" [ref=e10] [cursor=pointer]:
            - /url: /train-ticket?utm_source=dwebhome_header_ttb&device_type_id=6
            - button "Train Tickets" [ref=e11]:
              - text: Train Tickets
              - img
          - link "IntrCity SmartBus" [ref=e12] [cursor=pointer]:
            - /url: /bus-booking?utm_source=dwebhome_header_smartbus
            - button "IntrCity SmartBus" [ref=e13]:
              - text: IntrCity SmartBus
              - img [ref=e14]
          - link "Food On Train" [ref=e15] [cursor=pointer]:
            - /url: /buy-food-in-train?utm_source=ry_web_home_page_main_menu&utm_medium=DESKTOP_WEB
            - button "Food On Train" [ref=e16]:
              - text: Food On Train
              - img
          - button "Train Info" [ref=e17] [cursor=pointer]:
            - text: Train Info
            - img [ref=e18]
          - button "More" [ref=e19] [cursor=pointer]:
            - text: More
            - img [ref=e20]
    - generic [ref=e21]:
      - generic [ref=e23]:
        - generic [ref=e24]:
          - generic [ref=e25]:
            - button [ref=e27] [cursor=pointer]:
              - img [ref=e28]
            - heading "Train Time Table" [level=1] [ref=e30]
          - generic [ref=e34]:
            - generic: Type a Train No or Name
            - generic [ref=e35]:
              - combobox "Type a Train No or Name" [ref=e36]
              - group:
                - generic: Type a Train No or Name
          - iframe [ref=e41]:
            - generic [ref=f8e2]:
              - iframe [ref=f8e4]:
                - link [ref=f17e2] [cursor=pointer]:
                  - /url: https://www.pathtosuccess.global
                  - img [ref=f17e3]
              - generic [ref=f8e5]:
                - generic:
                  - img [ref=f8e9] [cursor=pointer]
                  - button [ref=f8e11] [cursor=pointer]:
                    - img [ref=f8e12]
        - generic [ref=e43]:
          - generic [ref=e45]:
            - link [ref=e49] [cursor=pointer]:
              - /url: /bus-booking
              - img [ref=e50]
            - link [ref=e54] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=HK38nHFXbrc
              - img [ref=e55]
            - link [ref=e59] [cursor=pointer]:
              - /url: /bus-booking
              - img [ref=e60]
            - link [ref=e64] [cursor=pointer]:
              - /url: /foods/find-meal-option
              - img [ref=e65]
            - link [ref=e69] [cursor=pointer]:
              - /url: /train-ticket
              - img [ref=e70]
            - link "Bus booking" [ref=e74] [cursor=pointer]:
              - /url: /bus-booking
              - img "Bus booking" [ref=e75]
            - link [ref=e79] [cursor=pointer]:
              - /url: https://www.youtube.com/watch?v=HK38nHFXbrc
              - img [ref=e80]
            - link [ref=e84] [cursor=pointer]:
              - /url: /bus-booking
              - img [ref=e85]
            - link [ref=e89] [cursor=pointer]:
              - /url: /foods/find-meal-option
              - img [ref=e90]
            - link [ref=e94] [cursor=pointer]:
              - /url: /train-ticket
              - img [ref=e95]
            - link [ref=e99] [cursor=pointer]:
              - /url: /bus-booking
              - img [ref=e100]
          - list [ref=e101]:
            - listitem [ref=e102] [cursor=pointer]:
              - button "• 1" [ref=e103]
            - listitem [ref=e104] [cursor=pointer]:
              - button "• 2" [ref=e105]
            - listitem [ref=e106] [cursor=pointer]:
              - button "• 3" [ref=e107]
            - listitem [ref=e108] [cursor=pointer]:
              - button "• 4" [ref=e109]
            - listitem [ref=e110] [cursor=pointer]:
              - button "• 5" [ref=e111]
      - generic [ref=e112]:
        - generic [ref=e114]:
          - heading "FAQ" [level=2] [ref=e115]
          - generic [ref=e116]:
            - generic [ref=e117]:
              - paragraph [ref=e118]: Q) What is Indian railways train time table?
              - generic [ref=e120]:
                - strong [ref=e121]: A)
                - text: Local as well as long distance train time table is the running schedule of a particular train. The train time table contains train timing - from its departure station to its termination station. Halting time for the train at stoppages along the way are also mentioned in the time table.
            - generic [ref=e122]:
              - paragraph [ref=e123]: Q) Of what use is the Indian railway time table?
              - generic [ref=e125]:
                - strong [ref=e126]: A)
                - text: It was around 1860 when the railway time table was introduced in India. The motive of railway time table is to synchronize the running of trains across India based on their route and halt stations. It made sure that no two trains (from the same or opposite direction) reached a platform at the same time. The train time table today gives a complete idea about the running schedule of any train in India.
            - generic [ref=e127]:
              - paragraph [ref=e128]: Q) What are important terminologies (information) associated with time table?
              - generic [ref=e130]:
                - strong [ref=e131]: A)
                - text: Some of the terminologies associated with Indian train time table are train name and number, Intermediate stations and Train status. Let us explain these railway time table facts for you.
                - list [ref=e132]:
                  - listitem [ref=e133]:
                    - text: •
                    - paragraph [ref=e134]:
                      - strong [ref=e135]: "Train name and Number:"
                      - text: Each train has a certain number, and they have a specific name tagged against them (which may or may not be unique). This information is essential in singling out a train from thousands of others running on that same day.
                  - listitem [ref=e136]:
                    - text: •
                    - paragraph [ref=e137]:
                      - strong [ref=e138]: "Intermediate Stations:"
                      - text: All the stations, which the train crosses along its route are included in a list of intermediate stations. A train might or might not have a stoppage (halt) at the Intermediate stations mentioned in the list.
                  - listitem [ref=e139]:
                    - text: •
                    - paragraph [ref=e140]:
                      - strong [ref=e141]: "Train Status:"
                      - text: A check about
                      - link "train status" [ref=e142] [cursor=pointer]:
                        - /url: /live-train-status
                      - text: ", gives the users an idea about the present location of the train, list of the upcoming stations, expected time of arrival at the upcoming stations and the delay record of the train."
            - generic [ref=e143]:
              - paragraph [ref=e144]: Q) Why expected Platform for Arrival is a key information in the train time table?
              - generic [ref=e146]:
                - strong [ref=e147]: A)
                - text: The expected platform information allows the passengers to avoid the last minute hassles. It helps them plan their boarding and de-boarding much better. Junction stations across India have more than five platforms, on an average, and passengers may face last minute problems while running around along with their luggage, children and other stuff. The expected platform information helps the passengers plan out much better.
            - generic [ref=e148]:
              - paragraph [ref=e149]: Q) What are the factors that may affect the train time table between two stations?
              - generic [ref=e151]:
                - strong [ref=e152]: A)
                - text: There are various climate and man-made situations which can cause a disruption in the Indian train time table. Trains are heavily delayed during the winter months (due to fog) and monsoons (due to heavy downpour). They are also hampered by road blocks, strikes, accidents en-route, and many other such factors.
        - generic [ref=e154]:
          - heading "List of Indian Railway Trains and their Time Table" [level=2] [ref=e155]
          - table [ref=e157]:
            - rowgroup [ref=e158]:
              - row "Train Number Train Name Train Type Run Days Departure time(hrs) Arrival Time(hrs)" [ref=e159]:
                - columnheader "Train Number" [ref=e160]
                - columnheader "Train Name" [ref=e161]
                - columnheader "Train Type" [ref=e162]
                - columnheader "Run Days" [ref=e163]
                - columnheader "Departure time(hrs)" [ref=e164]
                - columnheader "Arrival Time(hrs)" [ref=e165]
            - rowgroup [ref=e166]:
              - row "12267 mumbai central - ahmedabad ac duronto exp Duronto M,T,W,T,F,S,S 23:25 05:55" [ref=e167]:
                - cell "12267" [ref=e168]:
                  - link "12267" [ref=e169] [cursor=pointer]:
                    - /url: /time-table/12267-mumbai-central-ahmedabad-ac-duronto-exp
                - cell "mumbai central - ahmedabad ac duronto exp" [ref=e170]:
                  - link "mumbai central - ahmedabad ac duronto exp" [ref=e171] [cursor=pointer]:
                    - /url: /time-table/12267-mumbai-central-ahmedabad-ac-duronto-exp
                - cell "Duronto" [ref=e172]
                - cell "M,T,W,T,F,S,S" [ref=e173]
                - cell "23:25" [ref=e174]
                - cell "05:55" [ref=e175]
              - row "12268 ahmedabad - mumbai cent ac duronto exp Duronto M,T,W,T,F,S,S 23:40 06:00" [ref=e176]:
                - cell "12268" [ref=e177]:
                  - link "12268" [ref=e178] [cursor=pointer]:
                    - /url: /time-table/12268-ahmedabad-mumbai-cent-ac-duronto-exp
                - cell "ahmedabad - mumbai cent ac duronto exp" [ref=e179]:
                  - link "ahmedabad - mumbai cent ac duronto exp" [ref=e180] [cursor=pointer]:
                    - /url: /time-table/12268-ahmedabad-mumbai-cent-ac-duronto-exp
                - cell "Duronto" [ref=e181]
                - cell "M,T,W,T,F,S,S" [ref=e182]
                - cell "23:40" [ref=e183]
                - cell "06:00" [ref=e184]
              - row "22201 kolkata sealdah - puri duronto express Duronto M,W,F 20:00 04:00" [ref=e185]:
                - cell "22201" [ref=e186]:
                  - link "22201" [ref=e187] [cursor=pointer]:
                    - /url: /time-table/22201-kolkata-sealdah-puri-duronto-express
                - cell "kolkata sealdah - puri duronto express" [ref=e188]:
                  - link "kolkata sealdah - puri duronto express" [ref=e189] [cursor=pointer]:
                    - /url: /time-table/22201-kolkata-sealdah-puri-duronto-express
                - cell "Duronto" [ref=e190]
                - cell "M,W,F" [ref=e191]
                - cell "20:00" [ref=e192]
                - cell "04:00" [ref=e193]
              - row "22204 secunderabad - visakhapatnam ac duronto express Duronto M,W,S 20:15 06:35" [ref=e194]:
                - cell "22204" [ref=e195]:
                  - link "22204" [ref=e196] [cursor=pointer]:
                    - /url: /time-table/22204-secunderabad-visakhapatnam-ac-duronto-express
                - cell "secunderabad - visakhapatnam ac duronto express" [ref=e197]:
                  - link "secunderabad - visakhapatnam ac duronto express" [ref=e198] [cursor=pointer]:
                    - /url: /time-table/22204-secunderabad-visakhapatnam-ac-duronto-express
                - cell "Duronto" [ref=e199]
                - cell "M,W,S" [ref=e200]
                - cell "20:15" [ref=e201]
                - cell "06:35" [ref=e202]
              - row "22206 madurai - chennai central ac duronto express Duronto TUE,THU 22:40 07:20" [ref=e203]:
                - cell "22206" [ref=e204]:
                  - link "22206" [ref=e205] [cursor=pointer]:
                    - /url: /time-table/22206-madurai-chennai-central-ac-duronto-express
                - cell "madurai - chennai central ac duronto express" [ref=e206]:
                  - link "madurai - chennai central ac duronto express" [ref=e207] [cursor=pointer]:
                    - /url: /time-table/22206-madurai-chennai-central-ac-duronto-express
                - cell "Duronto" [ref=e208]
                - cell "TUE,THU" [ref=e209]
                - cell "22:40" [ref=e210]
                - cell "07:20" [ref=e211]
              - row "12426 jammu tawi - new delhi rajdhani express Rajdhani M,T,W,T,F,S,S 19:40 05:05" [ref=e212]:
                - cell "12426" [ref=e213]:
                  - link "12426" [ref=e214] [cursor=pointer]:
                    - /url: /time-table/12426-jammu-tawi-new-delhi-rajdhani-express
                - cell "jammu tawi - new delhi rajdhani express" [ref=e215]:
                  - link "jammu tawi - new delhi rajdhani express" [ref=e216] [cursor=pointer]:
                    - /url: /time-table/12426-jammu-tawi-new-delhi-rajdhani-express
                - cell "Rajdhani" [ref=e217]
                - cell "M,T,W,T,F,S,S" [ref=e218]
                - cell "19:40" [ref=e219]
                - cell "05:05" [ref=e220]
              - row "12430 new delhi - lucknow ac sf express Rajdhani M,T,F,S 20:50 06:40" [ref=e221]:
                - cell "12430" [ref=e222]:
                  - link "12430" [ref=e223] [cursor=pointer]:
                    - /url: /time-table/12430-new-delhi-lucknow-ac-sf-express
                - cell "new delhi - lucknow ac sf express" [ref=e224]:
                  - link "new delhi - lucknow ac sf express" [ref=e225] [cursor=pointer]:
                    - /url: /time-table/12430-new-delhi-lucknow-ac-sf-express
                - cell "Rajdhani" [ref=e226]
                - cell "M,T,F,S" [ref=e227]
                - cell "20:50" [ref=e228]
                - cell "06:40" [ref=e229]
              - row "12437 secunderabad - hazrat nizamuddin rajdhani express Rajdhani WED 12:45 10:25" [ref=e230]:
                - cell "12437" [ref=e231]:
                  - link "12437" [ref=e232] [cursor=pointer]:
                    - /url: /time-table/12437-secunderabad-hazrat-nizamuddin-rajdhani-express
                - cell "secunderabad - hazrat nizamuddin rajdhani express" [ref=e233]:
                  - link "secunderabad - hazrat nizamuddin rajdhani express" [ref=e234] [cursor=pointer]:
                    - /url: /time-table/12437-secunderabad-hazrat-nizamuddin-rajdhani-express
                - cell "Rajdhani" [ref=e235]
                - cell "WED" [ref=e236]
                - cell "12:45" [ref=e237]
                - cell "10:25" [ref=e238]
              - row "12951 mumbai central - new delhi rajdhani express Rajdhani M,T,W,T,F,S,S 16:35 08:35" [ref=e239]:
                - cell "12951" [ref=e240]:
                  - link "12951" [ref=e241] [cursor=pointer]:
                    - /url: /time-table/12951-mumbai-central-new-delhi-rajdhani-express
                - cell "mumbai central - new delhi rajdhani express" [ref=e242]:
                  - link "mumbai central - new delhi rajdhani express" [ref=e243] [cursor=pointer]:
                    - /url: /time-table/12951-mumbai-central-new-delhi-rajdhani-express
                - cell "Rajdhani" [ref=e244]
                - cell "M,T,W,T,F,S,S" [ref=e245]
                - cell "16:35" [ref=e246]
                - cell "08:35" [ref=e247]
              - row "12953 mumbai cent - hazrat nizamuddin august kranti raj exp Rajdhani M,T,W,T,F,S,S 17:40 10:55" [ref=e248]:
                - cell "12953" [ref=e249]:
                  - link "12953" [ref=e250] [cursor=pointer]:
                    - /url: /time-table/12953-mumbai-cent-hazrat-nizamuddin-august-kranti-raj-exp
                - cell "mumbai cent - hazrat nizamuddin august kranti raj exp" [ref=e251]:
                  - link "mumbai cent - hazrat nizamuddin august kranti raj exp" [ref=e252] [cursor=pointer]:
                    - /url: /time-table/12953-mumbai-cent-hazrat-nizamuddin-august-kranti-raj-exp
                - cell "Rajdhani" [ref=e253]
                - cell "M,T,W,T,F,S,S" [ref=e254]
                - cell "17:40" [ref=e255]
                - cell "10:55" [ref=e256]
              - row "12019 howrah - ranchi shatabdi express Shatabdi M,T,W,T,F,S 06:05 13:15" [ref=e257]:
                - cell "12019" [ref=e258]:
                  - link "12019" [ref=e259] [cursor=pointer]:
                    - /url: /time-table/12019-howrah-ranchi-shatabdi-express
                - cell "howrah - ranchi shatabdi express" [ref=e260]:
                  - link "howrah - ranchi shatabdi express" [ref=e261] [cursor=pointer]:
                    - /url: /time-table/12019-howrah-ranchi-shatabdi-express
                - cell "Shatabdi" [ref=e262]
                - cell "M,T,W,T,F,S" [ref=e263]
                - cell "06:05" [ref=e264]
                - cell "13:15" [ref=e265]
              - row "12038 ludhiana - new delhi shatabdi express Shatabdi T,W,T,F,S 16:40 22:10" [ref=e266]:
                - cell "12038" [ref=e267]:
                  - link "12038" [ref=e268] [cursor=pointer]:
                    - /url: /time-table/12038-ludhiana-new-delhi-shatabdi-express
                - cell "ludhiana - new delhi shatabdi express" [ref=e269]:
                  - link "ludhiana - new delhi shatabdi express" [ref=e270] [cursor=pointer]:
                    - /url: /time-table/12038-ludhiana-new-delhi-shatabdi-express
                - cell "Shatabdi" [ref=e271]
                - cell "T,W,T,F,S" [ref=e272]
                - cell "16:40" [ref=e273]
                - cell "22:10" [ref=e274]
              - row "12048 firozpur - new delhi shatabdi express Shatabdi M,S 04:00 21:10" [ref=e275]:
                - cell "12048" [ref=e276]:
                  - link "12048" [ref=e277] [cursor=pointer]:
                    - /url: /time-table/12048-firozpur-new-delhi-shatabdi-express
                - cell "firozpur - new delhi shatabdi express" [ref=e278]:
                  - link "firozpur - new delhi shatabdi express" [ref=e279] [cursor=pointer]:
                    - /url: /time-table/12048-firozpur-new-delhi-shatabdi-express
                - cell "Shatabdi" [ref=e280]
                - cell "M,S" [ref=e281]
                - cell "04:00" [ref=e282]
                - cell "21:10" [ref=e283]
              - row "12049 agra cantt - delhi h nizamuddin gatimaan express Shatabdi M,T,W,T,S,S 17:50 19:30" [ref=e284]:
                - cell "12049" [ref=e285]:
                  - link "12049" [ref=e286] [cursor=pointer]:
                    - /url: /time-table/12049-agra-cantt-delhi-h-nizamuddin-gatimaan-express
                - cell "agra cantt - delhi h nizamuddin gatimaan express" [ref=e287]:
                  - link "agra cantt - delhi h nizamuddin gatimaan express" [ref=e288] [cursor=pointer]:
                    - /url: /time-table/12049-agra-cantt-delhi-h-nizamuddin-gatimaan-express
                - cell "Shatabdi" [ref=e289]
                - cell "M,T,W,T,S,S" [ref=e290]
                - cell "17:50" [ref=e291]
                - cell "19:30" [ref=e292]
              - row "12050 delhi h nizamuddin - agra cantt gatimaan express Shatabdi M,T,W,T,S,S 08:10 09:50" [ref=e293]:
                - cell "12050" [ref=e294]:
                  - link "12050" [ref=e295] [cursor=pointer]:
                    - /url: /time-table/12050-delhi-h-nizamuddin-agra-cantt-gatimaan-express
                - cell "delhi h nizamuddin - agra cantt gatimaan express" [ref=e296]:
                  - link "delhi h nizamuddin - agra cantt gatimaan express" [ref=e297] [cursor=pointer]:
                    - /url: /time-table/12050-delhi-h-nizamuddin-agra-cantt-gatimaan-express
                - cell "Shatabdi" [ref=e298]
                - cell "M,T,W,T,S,S" [ref=e299]
                - cell "08:10" [ref=e300]
                - cell "09:50" [ref=e301]
              - row "11077 pune - jammu tawi jhelum express MAIL EXPRESS M,T,W,T,F,S,S 17:20 10:10" [ref=e302]:
                - cell "11077" [ref=e303]:
                  - link "11077" [ref=e304] [cursor=pointer]:
                    - /url: /time-table/11077-pune-jammu-tawi-jhelum-express
                - cell "pune - jammu tawi jhelum express" [ref=e305]:
                  - link "pune - jammu tawi jhelum express" [ref=e306] [cursor=pointer]:
                    - /url: /time-table/11077-pune-jammu-tawi-jhelum-express
                - cell "MAIL EXPRESS" [ref=e307]
                - cell "M,T,W,T,F,S,S" [ref=e308]
                - cell "17:20" [ref=e309]
                - cell "10:10" [ref=e310]
              - row "12138 firozpur cantt - mumbai cst punjab mail sf exp SUPERFAST M,T,W,T,F,S,S 21:40 07:35" [ref=e311]:
                - cell "12138" [ref=e312]:
                  - link "12138" [ref=e313] [cursor=pointer]:
                    - /url: /time-table/12138-firozpur-cantt-mumbai-cst-punjab-mail-sf-exp
                - cell "firozpur cantt - mumbai cst punjab mail sf exp" [ref=e314]:
                  - link "firozpur cantt - mumbai cst punjab mail sf exp" [ref=e315] [cursor=pointer]:
                    - /url: /time-table/12138-firozpur-cantt-mumbai-cst-punjab-mail-sf-exp
                - cell "SUPERFAST" [ref=e316]
                - cell "M,T,W,T,F,S,S" [ref=e317]
                - cell "21:40" [ref=e318]
                - cell "07:35" [ref=e319]
              - row "12295 bangalore city - danapur sanghamitra sf exp SUPERFAST M,T,W,T,F,S,S 09:00 09:20" [ref=e320]:
                - cell "12295" [ref=e321]:
                  - link "12295" [ref=e322] [cursor=pointer]:
                    - /url: /time-table/12295-bangalore-city-danapur-sanghamitra-sf-exp
                - cell "bangalore city - danapur sanghamitra sf exp" [ref=e323]:
                  - link "bangalore city - danapur sanghamitra sf exp" [ref=e324] [cursor=pointer]:
                    - /url: /time-table/12295-bangalore-city-danapur-sanghamitra-sf-exp
                - cell "SUPERFAST" [ref=e325]
                - cell "M,T,W,T,F,S,S" [ref=e326]
                - cell "09:00" [ref=e327]
                - cell "09:20" [ref=e328]
              - row "12307 howrah - jodhpur sf express SUPERFAST M,T,W,T,F,S,S 23:30 08:30" [ref=e329]:
                - cell "12307" [ref=e330]:
                  - link "12307" [ref=e331] [cursor=pointer]:
                    - /url: /time-table/12307-howrah-jodhpur-sf-express
                - cell "howrah - jodhpur sf express" [ref=e332]:
                  - link "howrah - jodhpur sf express" [ref=e333] [cursor=pointer]:
                    - /url: /time-table/12307-howrah-jodhpur-sf-express
                - cell "SUPERFAST" [ref=e334]
                - cell "M,T,W,T,F,S,S" [ref=e335]
                - cell "23:30" [ref=e336]
                - cell "08:30" [ref=e337]
              - row "12424 new delhi - dibrugarh town rajdhani express RAJDHANI M,T,W,T,F,S,S 13:55 07:00" [ref=e338]:
                - cell "12424" [ref=e339]:
                  - link "12424" [ref=e340] [cursor=pointer]:
                    - /url: /time-table/12424-new-delhi-dibrugarh-town-rajdhani-express
                - cell "new delhi - dibrugarh town rajdhani express" [ref=e341]:
                  - link "new delhi - dibrugarh town rajdhani express" [ref=e342] [cursor=pointer]:
                    - /url: /time-table/12424-new-delhi-dibrugarh-town-rajdhani-express
                - cell "RAJDHANI" [ref=e343]
                - cell "M,T,W,T,F,S,S" [ref=e344]
                - cell "13:55" [ref=e345]
                - cell "07:00" [ref=e346]
              - row "12506 delhi anand vihar - guwahati north east express SUPERFAST M,T,W,T,F,S,S 06:45 16:50" [ref=e347]:
                - cell "12506" [ref=e348]:
                  - link "12506" [ref=e349] [cursor=pointer]:
                    - /url: /time-table/12506-delhi-anand-vihar-guwahati-north-east-express
                - cell "delhi anand vihar - guwahati north east express" [ref=e350]:
                  - link "delhi anand vihar - guwahati north east express" [ref=e351] [cursor=pointer]:
                    - /url: /time-table/12506-delhi-anand-vihar-guwahati-north-east-express
                - cell "SUPERFAST" [ref=e352]
                - cell "M,T,W,T,F,S,S" [ref=e353]
                - cell "06:45" [ref=e354]
                - cell "16:50" [ref=e355]
              - row "12801 puri - new delhi purushottam sf express SUPERFAST M,T,W,T,F,S,S 21:45 04:50" [ref=e356]:
                - cell "12801" [ref=e357]:
                  - link "12801" [ref=e358] [cursor=pointer]:
                    - /url: /time-table/12801-puri-new-delhi-purushottam-sf-express
                - cell "puri - new delhi purushottam sf express" [ref=e359]:
                  - link "puri - new delhi purushottam sf express" [ref=e360] [cursor=pointer]:
                    - /url: /time-table/12801-puri-new-delhi-purushottam-sf-express
                - cell "SUPERFAST" [ref=e361]
                - cell "M,T,W,T,F,S,S" [ref=e362]
                - cell "21:45" [ref=e363]
                - cell "04:50" [ref=e364]
              - row "12802 new delhi - puri purushottam sf express SUPERFAST M,T,W,T,F,S,S 22:15 05:25" [ref=e365]:
                - cell "12802" [ref=e366]:
                  - link "12802" [ref=e367] [cursor=pointer]:
                    - /url: /time-table/12802-new-delhi-puri-purushottam-sf-express
                - cell "new delhi - puri purushottam sf express" [ref=e368]:
                  - link "new delhi - puri purushottam sf express" [ref=e369] [cursor=pointer]:
                    - /url: /time-table/12802-new-delhi-puri-purushottam-sf-express
                - cell "SUPERFAST" [ref=e370]
                - cell "M,T,W,T,F,S,S" [ref=e371]
                - cell "22:15" [ref=e372]
                - cell "05:25" [ref=e373]
              - row "12833 ahmedabad - howrah sf express SUPERFAST M,T,W,T,F,S,S 00:15 13:30" [ref=e374]:
                - cell "12833" [ref=e375]:
                  - link "12833" [ref=e376] [cursor=pointer]:
                    - /url: /time-table/12833-ahmedabad-howrah-sf-express
                - cell "ahmedabad - howrah sf express" [ref=e377]:
                  - link "ahmedabad - howrah sf express" [ref=e378] [cursor=pointer]:
                    - /url: /time-table/12833-ahmedabad-howrah-sf-express
                - cell "SUPERFAST" [ref=e379]
                - cell "M,T,W,T,F,S,S" [ref=e380]
                - cell "00:15" [ref=e381]
                - cell "13:30" [ref=e382]
              - row "12859 mumbai cst - howrah gitanjali sf express SUPERFAST M,T,W,T,F,S,S 06:00 12:30" [ref=e383]:
                - cell "12859" [ref=e384]:
                  - link "12859" [ref=e385] [cursor=pointer]:
                    - /url: /time-table/12859-mumbai-cst-howrah-gitanjali-sf-express
                - cell "mumbai cst - howrah gitanjali sf express" [ref=e386]:
                  - link "mumbai cst - howrah gitanjali sf express" [ref=e387] [cursor=pointer]:
                    - /url: /time-table/12859-mumbai-cst-howrah-gitanjali-sf-express
                - cell "SUPERFAST" [ref=e388]
                - cell "M,T,W,T,F,S,S" [ref=e389]
                - cell "06:00" [ref=e390]
                - cell "12:30" [ref=e391]
              - row "12864 yesvantpur - howrah sf express SUPERFAST M,T,W,T,F,S,S 19:35 06:25" [ref=e392]:
                - cell "12864" [ref=e393]:
                  - link "12864" [ref=e394] [cursor=pointer]:
                    - /url: /time-table/12864-yesvantpur-howrah-sf-express
                - cell "yesvantpur - howrah sf express" [ref=e395]:
                  - link "yesvantpur - howrah sf express" [ref=e396] [cursor=pointer]:
                    - /url: /time-table/12864-yesvantpur-howrah-sf-express
                - cell "SUPERFAST" [ref=e397]
                - cell "M,T,W,T,F,S,S" [ref=e398]
                - cell "19:35" [ref=e399]
                - cell "06:25" [ref=e400]
    - generic [ref=e402]:
      - generic [ref=e404]:
        - generic [ref=e406]:
          - generic [ref=e407]:
            - generic [ref=e408]: Features
            - generic [ref=e409]:
              - link "Live Train Status" [ref=e411] [cursor=pointer]:
                - /url: /live-train-status?utm_source=tbs_result_dweb_footer
              - link "PNR Status" [ref=e413] [cursor=pointer]:
                - /url: /pnr-status?utm_source=tbs_result_dweb_footer
              - link "Train Time Table" [ref=e415] [cursor=pointer]:
                - /url: /time-table?utm_source=tbs_result_dweb_footer
              - link "Seat Availability" [ref=e417] [cursor=pointer]:
                - /url: /seat-availability?utm_source=tbs_result_dweb_footer
              - link "Train between Stations" [ref=e419] [cursor=pointer]:
                - /url: /trains-between-stations?utm_source=tbs_result_dweb_footer
              - link "Arrival Departure" [ref=e421] [cursor=pointer]:
                - /url: /arrival-departure?utm_source=tbs_result_dweb_footer
              - link "Travel Advisory" [ref=e423] [cursor=pointer]:
                - /url: /travel-advisory?utm_source=tbs_result_dweb_footer
          - generic [ref=e424]:
            - generic [ref=e425]: Book with Us
            - generic [ref=e426]:
              - link "Bus Tickets" [ref=e428] [cursor=pointer]:
                - /url: /bus-booking?utm_source=tbs_result_dweb_footer
              - link "Train Tickets" [ref=e430] [cursor=pointer]:
                - /url: /train-ticket?utm_source=tbs_result_dweb_footer
              - link "Food on Train" [ref=e432] [cursor=pointer]:
                - /url: https://www.railyatri.in/buy-food-in-train?utm_source=tbs_result_dweb_footer
          - generic [ref=e433]:
            - generic [ref=e434]: Info
            - generic [ref=e435]:
              - link "About Us" [ref=e437] [cursor=pointer]:
                - /url: /about-us?utm_source=tbs_result_dweb_footer
              - link "Contact Us" [ref=e439] [cursor=pointer]:
                - /url: /contact-us?utm_source=tbs_result_dweb_footer
              - link "FAQs" [ref=e441] [cursor=pointer]:
                - /url: /faq?utm_source=tbs_result_dweb_footer
              - link "Partners" [ref=e443] [cursor=pointer]:
                - /url: /partners?utm_source=tbs_result_dweb_footer
              - link "Advertise With Us" [ref=e445] [cursor=pointer]:
                - /url: mailto:advertising@railyatri.in
              - link "Work With Us" [ref=e447] [cursor=pointer]:
                - /url: /work-with-us?utm_source=tbs_result_dweb_footer
              - link "Media" [ref=e449] [cursor=pointer]:
                - /url: /print-media?utm_source=tbs_result_dweb_footer
          - generic [ref=e450]:
            - generic [ref=e451]: Our Family
            - link "IntrCity Smart Bus" [ref=e454] [cursor=pointer]:
              - /url: https://www.intrcity.com?utm_source=tbs_result_dweb_footer
        - generic [ref=e455]:
          - generic [ref=e456]:
            - img "ry logo" [ref=e457]
            - generic [ref=e458]: RailYatri is a one stop solution that furnishes an expanse of data-based travel discovery at your disposal. So get connected for an inclusive experience of Smart Bus booking, Food on Train service, Train Ticket booking & journey information.
            - generic [ref=e459]: Stelling Technologies Private Limited
            - generic [ref=e460]: "CIN: U72200UP2011PTC087404"
            - generic [ref=e461]: "Registered Office:"
            - generic [ref=e462]: Ground Floor Amco Tower, Plot No A - 5, 6 & 7, Sector 9, Gautam Buddha Nagar, Noida, Uttar Pradesh, India, 201301
          - generic [ref=e463]:
            - link "fb logo" [ref=e465] [cursor=pointer]:
              - /url: http://www.facebook.com/railyatri
              - img "fb logo" [ref=e466]
            - link "x logo" [ref=e468] [cursor=pointer]:
              - /url: https://www.instagram.com/railyatri.in/?hl=en
              - img "x logo" [ref=e469]
            - link "yt logo" [ref=e471] [cursor=pointer]:
              - /url: https://www.youtube.com/channel/UC258cjsQ688s3NCkbN_nZ7g?sub_confirmation=1
              - img "yt logo" [ref=e472]
            - link "x logo" [ref=e474] [cursor=pointer]:
              - /url: http://twitter.com/railyatri
              - img "x logo" [ref=e475]
      - generic [ref=e477]:
        - img "RailYatri train" [ref=e478]
        - paragraph [ref=e479]:
          - text: Made with ❤️ in India. © Copyright by RailYatri.
          - link "Terms of Use" [ref=e480] [cursor=pointer]:
            - /url: https://www.railyatri.in/terms-of-uses?utm_source=tbs_result_dweb_footer
          - text: "|"
          - link "Privacy Policy" [ref=e481] [cursor=pointer]:
            - /url: https://www.railyatri.in/privacy-policy?utm_source=tbs_result_dweb_footer
  - alert [ref=e482]
```

# Test source

```ts
  134 | 
  135 | 
  136 | for(let i=1; i<await rows.count();i++)
  137 | {
  138 | 
  139 | 
  140 |     const cells= await table.getByRole("cell")
  141 | 
  142 |     // const rowtext= await rows.nth(i).textContent();
  143 | 
  144 |     // console.log("Rows:"+ rowtext)
  145 | 
  146 |     // const coltext= await cells.nth(i).textContent()
  147 |     // console.log("Col text:"+ coltext)
  148 | 
  149 | 
  150 |     
  151 |     let train_numbders= await cells.nth(0).textContent()
  152 |     let train_names= await cells.nth(1).textContent()
  153 |     console.log("Train Numbers:"+ train_numbders)
  154 |    console.log("train names:"+ train_names)
  155 |  }
  156 |    
  157 | })
  158 | 
  159 | 
  160 | 
  161 | 
  162 | test("Train full data ",async ({page})=>{
  163 | 
  164 | 
  165 |     await  page.goto("https://www.railyatri.in/time-table?utm_source=dwebhome_header&device_type_id=6")
  166 |     await page.waitForTimeout(5000)
  167 | 
  168 |     const table= page.locator(".timetable_table__4hbNj")
  169 | 
  170 | 
  171 |     const rows= table.getByRole("row")
  172 | 
  173 | 
  174 | 
  175 | for(let i=0; i<await rows.count();i++)
  176 | {
  177 | 
  178 |   //  const cells= await table.getByRole("cell")
  179 |   const cells= rows.nth(i).getByRole("cell")
  180 | 
  181 |     for(let j=0;j<await cells.count();j++)
  182 |     {
  183 | 
  184 |         const train_data=await cells.nth(j).textContent()
  185 |         console.log("Train full dada is :"+ train_data)
  186 |     }
  187 | 
  188 |  }
  189 |    
  190 | })
  191 | 
  192 | 
  193 | 
  194 | 
  195 | test("data",async ({page})=>{
  196 | 
  197 | 
  198 |     await  page.goto("https://www.railyatri.in/time-table?utm_source=dwebhome_header&device_type_id=6")
  199 |     await page.waitForTimeout(5000)
  200 | 
  201 |     const table= page.locator(".timetable_table__4hbNj tbody tr")
  202 | 
  203 | 
  204 |     const rows=  table
  205 | 
  206 | 
  207 | 
  208 | for(let i=0; i<await rows.count();i++)
  209 | {
  210 | 
  211 |   //  const cells= await table.getByRole("cell")
  212 |   const cells= rows.nth(i).locator("td")
  213 | 
  214 |     for(let j=0;j<await cells.count();j++)
  215 |     {
  216 | 
  217 |         const train_data=await cells.nth(j).textContent()
  218 |         console.log("Train full dada is :"+ train_data)
  219 |     }
  220 | 
  221 |  }
  222 | 
  223 | 
  224 |    
  225 | })
  226 | 
  227 | 
  228 | 
  229 | 
  230 | test.only("data train ",async ({page})=>{
  231 | 
  232 | 
  233 |     await  page.goto("https://www.railyatri.in/time-table?utm_source=dwebhome_header&device_type_id=6")
> 234 |     await page.waitForTimeout(5000)
      |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  235 | 
  236 |     const table= page.locator(".timetable_table__4hbNj tbody tr")
  237 | 
  238 | 
  239 |     const rows=  table
  240 | 
  241 | 
  242 | 
  243 | for(let i=0; i<await rows.count();i++)
  244 | {
  245 | 
  246 |   //  const cells= await table.getByRole("cell")
  247 |   const cells= rows.nth(i).locator("th,td")
  248 | 
  249 |   const data=await cells.allInnerTexts()
  250 |   console.log("data is :"+ data.join(' | '))
  251 | 
  252 | 
  253 |        
  254 |   
  255 | 
  256 | }
  257 | 
  258 | 
  259 |    
  260 | })
```