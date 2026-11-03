# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Sample4.spec.js >> Flipkart
- Location: tests\Sample4.spec.js:59:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.flipkart.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e13]:
    - generic [ref=e16]:
      - generic [ref=e18]:
        - generic [ref=e27]:
          - generic [ref=e29]:
            - img "Image" [ref=e32]
            - img "Image" [ref=e35]
          - link "Image Image" [ref=e37] [cursor=pointer]:
            - /url: /flights-travel-uhp-at-store?marketplace=FKT
            - img "Image" [ref=e40]
            - img "Image" [ref=e43]
        - generic [ref=e53]:
          - generic [ref=e54]:
            - img [ref=e55]
            - generic [ref=e58]: Location not set
          - generic [ref=e60]:
            - generic [ref=e61]: Select delivery location
            - img [ref=e62]
      - banner [ref=e70]:
        - generic [ref=e74]:
          - button "Search for Products, Brands and More" [ref=e75] [cursor=pointer]:
            - img "Search Icon" [ref=e76]
          - textbox "Search for Products, Brands and More" [ref=e80]
        - generic [ref=e81]:
          - generic [ref=e86]:
            - link "Login" [ref=e87] [cursor=pointer]:
              - /url: /login?ret=/
              - img "Login" [ref=e88]
              - generic [ref=e89]: Login
            - img "Chevron" [ref=e90]
          - generic [ref=e95]:
            - link "More" [ref=e96] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e97]: More
            - img "Chevron" [ref=e98]
          - link "Cart Cart" [ref=e101] [cursor=pointer]:
            - /url: /viewcart?marketplace=FLIPKART
            - img "Cart" [ref=e102]
            - generic [ref=e103]: Cart
      - generic [ref=e105]:
        - link "For You" [ref=e110] [cursor=pointer]:
          - /url: https://www.flipkart.com/
          - generic [ref=e112]:
            - img [ref=e115]
            - heading "For You" [level=1] [ref=e116]
        - link "Fashion" [ref=e121] [cursor=pointer]:
          - /url: /ss-26-base-inline-at-store
          - generic [ref=e123]:
            - img [ref=e126]
            - generic [ref=e127]: Fashion
        - link "Mobiles" [ref=e132] [cursor=pointer]:
          - /url: /mobile-phones-store
          - generic [ref=e134]:
            - img [ref=e137]
            - generic [ref=e138]: Mobiles
        - link "Electronics" [ref=e143] [cursor=pointer]:
          - /url: /new-elec-clp-march-at-store
          - generic [ref=e145]:
            - img [ref=e148]
            - generic [ref=e149]: Electronics
        - link "Beauty" [ref=e154] [cursor=pointer]:
          - /url: /bpc-bau-new-inline-at-store
          - generic [ref=e156]:
            - img [ref=e159]
            - generic [ref=e160]: Beauty
        - link "Home" [ref=e165] [cursor=pointer]:
          - /url: /home-kitchen-25-at-store
          - generic [ref=e167]:
            - img [ref=e170]
            - generic [ref=e171]: Home
        - link "Appliances" [ref=e176] [cursor=pointer]:
          - /url: /tv-and-appliances-inline-ab-at-store
          - generic [ref=e178]:
            - img [ref=e181]
            - generic [ref=e182]: Appliances
        - link "Toys, baby.." [ref=e187] [cursor=pointer]:
          - /url: /toysbc-new26-inline-at-store
          - generic [ref=e189]:
            - img [ref=e192]
            - generic [ref=e193]: Toys, baby..
        - link "Food & Health" [ref=e198] [cursor=pointer]:
          - /url: /fnhc-2025-new-at-store
          - generic [ref=e200]:
            - img [ref=e203]
            - generic [ref=e204]: Food & Health
        - link "Auto Accessories" [ref=e209] [cursor=pointer]:
          - /url: /aa-2025-new-at-store
          - generic [ref=e211]:
            - img [ref=e214]
            - generic [ref=e215]: Auto Accessories
        - link "Sports & Fitness" [ref=e220] [cursor=pointer]:
          - /url: /sf-inline-2025-at-store
          - generic [ref=e222]:
            - img [ref=e225]
            - generic [ref=e226]: Sports & Fitness
        - link "Furniture" [ref=e231] [cursor=pointer]:
          - /url: /india-ka-furniture-studio-inlines-at-store
          - generic [ref=e233]:
            - img [ref=e236]
            - generic [ref=e237]: Furniture
        - link "Books" [ref=e242] [cursor=pointer]:
          - /url: /books-at-store
          - generic [ref=e244]:
            - img [ref=e247]
            - generic [ref=e248]: Books
        - link "2 Wheelers" [ref=e253] [cursor=pointer]:
          - /url: /twowheelers-at-store
          - generic [ref=e255]:
            - img [ref=e258]
            - generic [ref=e259]: 2 Wheelers
    - generic [ref=e267]:
      - generic [ref=e282]:
        - link "Image" [ref=e289] [cursor=pointer]:
          - /url: /mens-footwear/pr?sid=osp%2Ccil%2Ce83&p%5B%5D=facets.brand%255B%255D%3Daadi&p%5B%5D=facets.brand%255B%255D%3DBERSACHE&p%5B%5D=facets.brand%255B%255D%3DBirde&p%5B%5D=facets.brand%255B%255D%3DFAUSTO&p%5B%5D=facets.brand%255B%255D%3DVellinto&p%5B%5D=facets.brand%255B%255D%3DBRUTON&p%5B%5D=facets.brand%255B%255D%3DSvaar&p%5B%5D=facets.brand%255B%255D%3DKoburg&p%5B%5D=facets.brand%255B%255D%3DCHIPS&p%5B%5D=facets.brand%255B%255D%3DCassiey&p%5B%5D=facets.brand%255B%255D%3DEVOK&p%5B%5D=facets.brand%255B%255D%3DFabbmate&p%5B%5D=facets.brand%255B%255D%3DFeather%2BLeather&p%5B%5D=facets.brand%255B%255D%3DFootox&p%5B%5D=facets.brand%255B%255D%3DK%2527%2BFootlance&p%5B%5D=facets.brand%255B%255D%3DKhadim%2527s&p%5B%5D=facets.brand%255B%255D%3DKolapuri&p%5B%5D=facets.brand%255B%255D%3DKraasa&p%5B%5D=facets.brand%255B%255D%3DLayasa&p%5B%5D=facets.brand%255B%255D%3DKzaara&p%5B%5D=facets.brand%255B%255D%3DOrtho%2B%252B%2BRest&p%5B%5D=facets.brand%255B%255D%3DPampy%2BAngel&p%5B%5D=facets.brand%255B%255D%3DWELCOME&p%5B%5D=facets.brand%255B%255D%3DDOCTOR%2BEXTRA%2BSOFT&p%5B%5D=facets.brand%255B%255D%3DCogs&p%5B%5D=facets.brand%255B%255D%3DDr%2BPlus&p%5B%5D=facets.brand%255B%255D%3DDRACKFOOT&p%5B%5D=facets.brand%255B%255D%3DKapani%2BFashion&p%5B%5D=facets.brand%255B%255D%3DNOBELITE&p%5B%5D=facets.brand%255B%255D%3DRowlans&p%5B%5D=facets.brand%255B%255D%3DBonkerz&p%5B%5D=facets.brand%255B%255D%3DTrendmode&p%5B%5D=facets.brand%255B%255D%3DNeoz&p%5B%5D=facets.brand%255B%255D%3DLehar&p%5B%5D=facets.brand%255B%255D%3DLakhani&p%5B%5D=facets.brand%255B%255D%3DKolhapuri&p%5B%5D=facets.brand%255B%255D%3Ddensity&p%5B%5D=facets.brand%255B%255D%3DDelize&p%5B%5D=facets.brand%255B%255D%3DDELEFS&p%5B%5D=facets.brand%255B%255D%3DBOLTAGO&p%5B%5D=facets.brand%255B%255D%3DBOTOWI&p%5B%5D=facets.brand%255B%255D%3DBrawo&p%5B%5D=facets.brand%255B%255D%3Dbrighto&p%5B%5D=facets.brand%255B%255D%3DAeonik&p%5B%5D=facets.brand%255B%255D%3DAeroFast&p%5B%5D=facets.brand%255B%255D%3DACCENTOR&p%5B%5D=facets.brand%255B%255D%3DEL%2BPASO&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D299&param=2093485&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=DHVMFAUO7H0B_IAD&BU=Mixed
          - img "Image" [ref=e292]
        - link "Image" [ref=e299] [cursor=pointer]:
          - /url: /apple-iphone-17-white-256-gb/p/itm68ad8410784c7?pid=MOBHQV9YAZYYWY8A&param=299921&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=NF11GDID73UM_IAD&BU=Mixed
          - img "Image" [ref=e302]
        - link "Image" [ref=e309] [cursor=pointer]:
          - /url: /mivi-one-5g-green-128-gb/p/itm7c374475b93cf?pid=MOBHR3ZP7PRKEXUP&marketplace=FLIPKART&lid=LSTMOBHR3ZP7PRKEXUPKQQIR0&pageUID=1792249741149&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=VDF6HESRUYU5_AD&BU=Mixed
          - img "Image" [ref=e312]
        - link "Image" [ref=e319] [cursor=pointer]:
          - /url: /beauty-and-grooming/~cs-bjrcfncmj2/pr?sid=g9b&collection-tab-name=shampoo&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=46LLW5QIR64A_AD&BU=Mixed
          - img "Image" [ref=e322]
        - link "Image" [ref=e329] [cursor=pointer]:
          - /url: /audio-video/~cs-rewe7vcr1b/pr?sid=0pm&collection-tab-name=Best+of+Mivi+Sounbars&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=YWAV5NXYCX23_AD&BU=Mixed
          - img "Image" [ref=e332]
        - link "Image" [ref=e339] [cursor=pointer]:
          - /url: /audio-video/headset/earphones/wireless-earphones/true-wireless/pr?sid=0pm%2Cfcn%2C821%2Ca7x%2C2si&p%5B%5D=facets.features%255B%255D%3DNoise%2BCancellation&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=DPX2K3DUKF6M_IAD&BU=Mixed
          - img "Image" [ref=e342]
        - link "Image" [ref=e349] [cursor=pointer]:
          - /url: /beauty-and-grooming/~cs-vo5eo5fkr5/pr?sid=g9b&collection-tab-name=facewash&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=L8NNATKCR7XD_AD&BU=Mixed
          - img "Image" [ref=e352]
        - link "Image" [ref=e359] [cursor=pointer]:
          - /url: /samsung-galaxy-f70-5g-vivid-violet-128-gb/p/itmcc1028703e31e?pid=MOBHRV4XYK4GZGHQ&marketplace=FLIPKART&lid=LSTMOBHRV4XYK4GZGHQNMOQ4E&pageUID=1792342047874&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=AJXBTXT8W7IP_AD&BU=Mixed
          - img "Image" [ref=e362]
        - link "Image" [ref=e369] [cursor=pointer]:
          - /url: /mens-footwear/pr?sid=osp%2Ccil&otracker=nmenu_sub_Men_0_Footwear&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&p%5B%5D=facets.brand%255B%255D%3DADIDAS&param=209&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=N4BIBZVFMWQX_AD&BU=Mixed
          - img "Image" [ref=e372]
        - link "Image" [ref=e379] [cursor=pointer]:
          - /url: /mens-footwear/pr?sid=osp%2Ccil&otracker=nmenu_sub_Men_0_Footwear&p%5B%5D=facets.brand%255B%255D%3DAsics&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&param=291&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=Y4OPKQXNAVQA_AD&BU=Mixed
          - img "Image" [ref=e382]
      - generic [ref=e405]:
        - link "Image" [ref=e410] [cursor=pointer]:
          - /url: /beauty-and-grooming/~cs-g2d42aobkr/pr?sid=g9b&collection-tab-name=JOY&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=UU10NVC79IEP_AD&BU=Mixed
          - img "Image" [ref=e413]
        - link "Image" [ref=e418] [cursor=pointer]:
          - /url: /watches/wrist-watches/pr?sid=r18%2Cf13&otracker=categorytree&p%5B%5D=facets.discount_range_v1%255B%255D%3D40%2525%2Bor%2Bmore&sort=popularity&p%5B%5D=facets.brand%255B%255D%3DTIMEX&param=198&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=861LC4RMN86B_AD&BU=Mixed
          - img "Image" [ref=e421]
        - link "Image" [ref=e426] [cursor=pointer]:
          - /url: /beauty-and-grooming/~cs-846sk8obk9/pr?sid=g9b&collection-tab-name=Parachute&affid=996634&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=BK1XBAZ281QD_AD&BU=Mixed
          - img "Image" [ref=e429]
      - generic [ref=e439]:
        - generic [ref=e446]: People also viewed
        - generic [ref=e449]:
          - link "Image Juta under ₹299 Under ₹299" [ref=e454] [cursor=pointer]:
            - /url: /mens-footwear/mens-casual-shoes/pr?sid=osp%2Ccil%2Ce1f&p%5B%5D=facets.price_range.from%3DMin&sort=popularity&p%5B%5D=facets.price_range.to%3D299&p%5B%5D=facets.brand%255B%255D%3Dhouse%2Bof%2Bcommon&p%5B%5D=facets.brand%255B%255D%3Daadi&p%5B%5D=facets.brand%255B%255D%3DRoyal%2BCruzz&p%5B%5D=facets.brand%255B%255D%3DKzaara&p%5B%5D=facets.brand%255B%255D%3DK%2527%2BFootlance&p%5B%5D=facets.brand%255B%255D%3DWave%2BWalker&p%5B%5D=facets.brand%255B%255D%3DBXXY&p%5B%5D=facets.brand%255B%255D%3DEL%2BPASO&p%5B%5D=facets.brand%255B%255D%3DFAUSTO&p%5B%5D=facets.brand%255B%255D%3DFITCOM&p%5B%5D=facets.brand%255B%255D%3DHUNDO%2BP&p%5B%5D=facets.brand%255B%255D%3DKraasa&p%5B%5D=facets.brand%255B%255D%3DKnoos&p%5B%5D=facets.brand%255B%255D%3DLEEPEETER&p%5B%5D=facets.brand%255B%255D%3DLabbin&p%5B%5D=facets.brand%255B%255D%3DVellinto&p%5B%5D=facets.brand%255B%255D%3DAlvery&p%5B%5D=facets.brand%255B%255D%3DALCAZO&p%5B%5D=facets.brand%255B%255D%3Dagadi&p%5B%5D=facets.brand%255B%255D%3DAanbaan&p%5B%5D=facets.brand%255B%255D%3DAramish&p%5B%5D=facets.brand%255B%255D%3DaRICS&p%5B%5D=facets.brand%255B%255D%3DArber%2BKenton&p%5B%5D=facets.brand%255B%255D%3Daristitch&p%5B%5D=facets.brand%255B%255D%3DARIWA&p%5B%5D=facets.brand%255B%255D%3Darjun%2Benterprises&p%5B%5D=facets.brand%255B%255D%3DAzzoken&p%5B%5D=facets.brand%255B%255D%3DAzzaro%2BBlack&p%5B%5D=facets.brand%255B%255D%3Dawakya&p%5B%5D=facets.brand%255B%255D%3DAVA&p%5B%5D=facets.brand%255B%255D%3DAura%2BWalk&p%5B%5D=facets.brand%255B%255D%3DAstro&p%5B%5D=facets.brand%255B%255D%3DBLASTAR&p%5B%5D=facets.brand%255B%255D%3DBlackyard&p%5B%5D=facets.brand%255B%255D%3DBestows&p%5B%5D=facets.brand%255B%255D%3DBELLION&p%5B%5D=facets.brand%255B%255D%3DBaxxico&p%5B%5D=facets.brand%255B%255D%3DBarton&p%5B%5D=facets.brand%255B%255D%3DBLENKO&p%5B%5D=facets.brand%255B%255D%3DBlue%2BBella&p%5B%5D=facets.brand%255B%255D%3DBlue%2BHorse&p%5B%5D=facets.brand%255B%255D%3DBRANDIGO&p%5B%5D=facets.brand%255B%255D%3DBrawo&p%5B%5D=facets.brand%255B%255D%3DBuxton&p%5B%5D=facets.brand%255B%255D%3DDESTA&p%5B%5D=facets.brand%255B%255D%3DDEEUCO&p%5B%5D=facets.brand%255B%255D%3DEkaaya&p%5B%5D=facets.brand%255B%255D%3DEmpeno&p%5B%5D=facets.brand%255B%255D%3DERIX&p%5B%5D=facets.brand%255B%255D%3DFaxian&p%5B%5D=facets.brand%255B%255D%3Dfenja&p%5B%5D=facets.brand%255B%255D%3DFlooristo&p%5B%5D=facets.brand%255B%255D%3DFOOT%2BN%2BTOE&p%5B%5D=facets.brand%255B%255D%3DHarie&p%5B%5D=facets.brand%255B%255D%3DGurchan&p%5B%5D=facets.brand%255B%255D%3DGroofer&p%5B%5D=facets.brand%255B%255D%3DGELLWOJ&p%5B%5D=facets.brand%255B%255D%3DG%2BL%2BTrend&p%5B%5D=facets.brand%255B%255D%3DJINDAL%2BENTERPRISES&p%5B%5D=facets.brand%255B%255D%3Djetfighter&p%5B%5D=facets.brand%255B%255D%3DBELLMANCO&p%5B%5D=facets.brand%255B%255D%3DDFR&p%5B%5D=facets.brand%255B%255D%3DMen%2527s%2BAvenue&p%5B%5D=facets.brand%255B%255D%3DProdigal&p%5B%5D=facets.brand%255B%255D%3Dpelle%2Balbero&p%5B%5D=facets.brand%255B%255D%3Drajeraj&p%5B%5D=facets.brand%255B%255D%3DRed%2BEleven&p%5B%5D=facets.brand%255B%255D%3DRimezs&p%5B%5D=facets.brand%255B%255D%3DRyko&p%5B%5D=facets.brand%255B%255D%3DSAN%2BFRISSCO&p%5B%5D=facets.brand%255B%255D%3DSHUAN&p%5B%5D=facets.brand%255B%255D%3DYUVRATO%2BBAXI&p%5B%5D=facets.brand%255B%255D%3DTRUE%2BVICTORY&p%5B%5D=facets.brand%255B%255D%3DThirsty%2BCrow&p%5B%5D=facets.brand%255B%255D%3DStroll&p%5B%5D=facets.brand%255B%255D%3DStepsoft&p%5B%5D=facets.brand%255B%255D%3DZixer&p%5B%5D=facets.brand%255B%255D%3DFASHION%2BVICTIM&p%5B%5D=facets.brand%255B%255D%3DFree%2BKicks&p%5B%5D=facets.brand%255B%255D%3DBRUTON&p%5B%5D=facets.brand%255B%255D%3Djootiyapa&p%5B%5D=facets.brand%255B%255D%3DHOTSTYLE&p%5B%5D=facets.brand%255B%255D%3DTrendmode&param=5678&hpid=cvW5j1f-TT7jf5GAmdWr3Kp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrkyOTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJTSE9HRFpDU1lDUkdVRzc5IiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiQ2hlbHNlYSBib290cyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e464]
            - generic [ref=e467]:
              - generic [ref=e468]: Juta under ₹299
              - generic [ref=e469]: Under ₹299
          - link "Image Comfy Feels From ₹199" [ref=e474] [cursor=pointer]:
            - /url: /mens-footwear/mens-sports-shoes/pr?sid=osp%2Ccil%2C1cu&p%5B%5D=facets.brand%255B%255D%3DWELDONE&sort=popularity&p%5B%5D=facets.brand%255B%255D%3DHOTSTYLE&p%5B%5D=facets.brand%255B%255D%3DBRUTON&p%5B%5D=facets.brand%255B%255D%3DCOOPERWINGS&p%5B%5D=facets.brand%255B%255D%3DFree%2BKicks&p%5B%5D=facets.brand%255B%255D%3Djootiyapa&p%5B%5D=facets.brand%255B%255D%3DPennen&p%5B%5D=facets.brand%255B%255D%3DBOKZZON&p%5B%5D=facets.brand%255B%255D%3DSPOTWALK&p%5B%5D=facets.brand%255B%255D%3DWINGSCRAFT&p%5B%5D=facets.brand%255B%255D%3DTrendmode&p%5B%5D=facets.brand%255B%255D%3DANGO&p%5B%5D=facets.brand%255B%255D%3DBirde&p%5B%5D=facets.brand%255B%255D%3DPennon&p%5B%5D=facets.brand%255B%255D%3DLNT%2BFASHION&p%5B%5D=facets.brand%255B%255D%3Dhouse%2Bof%2Bcommon&p%5B%5D=facets.brand%255B%255D%3DHotspot&p%5B%5D=facets.brand%255B%255D%3DDRACKFOOT&p%5B%5D=facets.brand%255B%255D%3DSKYMORE&p%5B%5D=facets.brand%255B%255D%3DNOBELITE&p%5B%5D=facets.brand%255B%255D%3Daadi&p%5B%5D=facets.brand%255B%255D%3DCamfoot&p%5B%5D=facets.brand%255B%255D%3DURBANBOX&p%5B%5D=facets.brand%255B%255D%3DLEATHERKRAFT&p%5B%5D=facets.brand%255B%255D%3DWorld%2BWear%2BFootwear&p%5B%5D=facets.brand%255B%255D%3DCALCADOS&p%5B%5D=facets.brand%255B%255D%3DSender&p%5B%5D=facets.brand%255B%255D%3DAxter&p%5B%5D=facets.brand%255B%255D%3DGREVON&p%5B%5D=facets.brand%255B%255D%3DJut%2BFire&p%5B%5D=facets.brand%255B%255D%3DRoamra&p%5B%5D=facets.brand%255B%255D%3DSCLERE&p%5B%5D=facets.brand%255B%255D%3DSHOEFLY&p%5B%5D=facets.brand%255B%255D%3DAircum&p%5B%5D=facets.brand%255B%255D%3DA-CLASS&p%5B%5D=facets.brand%255B%255D%3DROASTER&p%5B%5D=facets.brand%255B%255D%3DKANEGGYE&p%5B%5D=facets.brand%255B%255D%3DJOSMOS&p%5B%5D=facets.brand%255B%255D%3DGenial&p%5B%5D=facets.brand%255B%255D%3DBegone&p%5B%5D=facets.brand%255B%255D%3DMagnolia&p%5B%5D=facets.brand%255B%255D%3DELASA&p%5B%5D=facets.brand%255B%255D%3DRoyal%2BCruzz&p%5B%5D=facets.brand%255B%255D%3DWALKAROO&p%5B%5D=facets.brand%255B%255D%3DKzaara&p%5B%5D=facets.brand%255B%255D%3DFootox&p%5B%5D=facets.brand%255B%255D%3DEarton&p%5B%5D=facets.brand%255B%255D%3Dontour&p%5B%5D=facets.brand%255B%255D%3DStride%2BUp&p%5B%5D=facets.brand%255B%255D%3DTR&p%5B%5D=facets.brand%255B%255D%3DTying&p%5B%5D=facets.brand%255B%255D%3DWOCMEC&p%5B%5D=facets.brand%255B%255D%3DVECHLO&p%5B%5D=facets.brand%255B%255D%3DWtrizak&p%5B%5D=facets.brand%255B%255D%3Dazalya&p%5B%5D=facets.brand%255B%255D%3DSIMATA&p%5B%5D=facets.brand%255B%255D%3DRapidBox&p%5B%5D=facets.brand%255B%255D%3DM7%2BBy%2BMetronaut&p%5B%5D=facets.brand%255B%255D%3DLANCER&p%5B%5D=facets.brand%255B%255D%3DDUNKASTON&p%5B%5D=facets.brand%255B%255D%3DFLIPJONES&p%5B%5D=facets.brand%255B%255D%3DDanma&p%5B%5D=facets.brand%255B%255D%3DGroofer&p%5B%5D=facets.brand%255B%255D%3DK%2527%2BFootlance&p%5B%5D=facets.brand%255B%255D%3DAirland&p%5B%5D=facets.brand%255B%255D%3DAirhype&p%5B%5D=facets.brand%255B%255D%3DAanbaan&p%5B%5D=facets.price_range.from%3D199&p%5B%5D=facets.price_range.to%3DMax&param=5678&hpid=wgejo3JDi7bbNElSUoI2uKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTE5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlNIT0hCWUNBR0ZYOVNEM1AiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJTcG9ydHkgc2hvZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e484]
            - generic [ref=e487]:
              - generic [ref=e488]: Comfy Feels
              - generic [ref=e489]: From ₹199
          - link "Image Deal of the Day From ₹99" [ref=e494] [cursor=pointer]:
            - /url: /watches/wrist-watches/pr?sid=r18%2Cf13&p%5B%5D=facets.price_range.from%3D99&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.brand%255B%255D%3DShocknshop&p%5B%5D=facets.brand%255B%255D%3DCurren&p%5B%5D=facets.brand%255B%255D%3DWristy&p%5B%5D=facets.brand%255B%255D%3DFOGG&p%5B%5D=facets.brand%255B%255D%3DCHARLIEKEEN&p%5B%5D=facets.brand%255B%255D%3DLOUIS%2BDEVIN&p%5B%5D=facets.brand%255B%255D%3Dluxurit&p%5B%5D=facets.brand%255B%255D%3DLOIS%2BCARON&p%5B%5D=facets.brand%255B%255D%3DANALOGUE&p%5B%5D=facets.brand%255B%255D%3DRUSTET&p%5B%5D=facets.brand%255B%255D%3DAcnos&p%5B%5D=facets.brand%255B%255D%3DIIK%2BCollection&p%5B%5D=facets.brand%255B%255D%3DIIK%2BCollections&p%5B%5D=facets.brand%255B%255D%3DPROVOGUE&p%5B%5D=facets.brand%255B%255D%3DMATRIX&p%5B%5D=facets.brand%255B%255D%3DTime%2BMatrix&p%5B%5D=facets.brand%255B%255D%3DKILLER&p%5B%5D=facets.brand%255B%255D%3DPIRASO&p%5B%5D=facets.brand%255B%255D%3DEDDY%2BHAGER&p%5B%5D=facets.brand%255B%255D%3DLIMESTONE&p%5B%5D=facets.brand%255B%255D%3DLORENZ&p%5B%5D=facets.brand%255B%255D%3DSKMEI&p%5B%5D=facets.brand%255B%255D%3DTIMEWEAR&p%5B%5D=facets.brand%255B%255D%3DCasado&p%5B%5D=facets.brand%255B%255D%3DMETRONAUT&p%5B%5D=facets.brand%255B%255D%3DM7%2BBy%2BMetronaut&p%5B%5D=facets.brand%255B%255D%3DABREXO&p%5B%5D=facets.brand%255B%255D%3DSeptem&p%5B%5D=facets.brand%255B%255D%3DNAVlFORCE&p%5B%5D=facets.brand%255B%255D%3DNAVIFORCE&p%5B%5D=facets.brand%255B%255D%3DOVERFLY&p%5B%5D=facets.brand%255B%255D%3DNIBOSI&p%5B%5D=facets.brand%255B%255D%3DV2A&p%5B%5D=facets.brand%255B%255D%3DAlix&p%5B%5D=facets.brand%255B%255D%3DKitcone&p%5B%5D=facets.brand%255B%255D%3DLongbo&p%5B%5D=facets.brand%255B%255D%3DBruno%2BMilano&p%5B%5D=facets.brand%255B%255D%3DBENYAR&p%5B%5D=facets.brand%255B%255D%3DSylvi&p%5B%5D=facets.brand%255B%255D%3DBenling&p%5B%5D=facets.brand%255B%255D%3DOLEVS&p%5B%5D=facets.brand%255B%255D%3DYHMEI&param=768787&hpid=_LEB_oDVnnx6rheeL0HHXap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiV0FUSDhGUU5ZRUJEUlNZSCIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIldhdGNoZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e504]
            - generic [ref=e507]:
              - generic [ref=e508]: Deal of the Day
              - generic [ref=e509]: From ₹99
          - link "Image Cello, Milton & more From ₹99" [ref=e514] [cursor=pointer]:
            - /url: /kitchen-cookware-serveware/water-bottles-flasks/pr?sid=upp%2C3t7&marketplace=FLIPKART&p%5B%5D=facets.price_range.from%3D99&p%5B%5D=facets.price_range.to%3DMax&hpid=rUgIA3m5TK4wZQuZBiANxqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiQk9URTZQVVY0UVdGR0hRWiIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIldhdGVyIEJvdHRsZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e524]
            - generic [ref=e527]:
              - generic [ref=e528]: Cello, Milton & more
              - generic [ref=e529]: From ₹99
      - generic [ref=e539]:
        - generic [ref=e543]:
          - img "Image" [ref=e546]
          - generic [ref=e548]:
            - generic [ref=e550]: Must-have Electronics & Appliances
            - link [ref=e551] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_5%7Emarketplace%3DFLIPKART%7EwidgetType%3DdealCardV3%7EcontentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e554]
        - generic [ref=e558]:
          - link "Image Mobile Body Panels Min. 50% Off" [ref=e563] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-68acdcc00524bb405486423ab89d4b18/pr?sid=tyy%2C4mr%2Cukk&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e573]
            - generic [ref=e576]:
              - generic [ref=e577]: Mobile Body Panels
              - generic [ref=e578]: Min. 50% Off
          - link "Image Power Banks Min. 50% Off" [ref=e583] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-5447acab9094df30966ed1ae80389723/pr?sid=tyy%2C4mr%2Cfu6&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e593]
            - generic [ref=e596]:
              - generic [ref=e597]: Power Banks
              - generic [ref=e598]: Min. 50% Off
          - link "Image Cable Drop Clips Min. 50% Off" [ref=e603] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-71f65676322c7d1a64b48629790e01f6/pr?sid=tyy%2C4mr%2Cxel&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e613]
            - generic [ref=e616]:
              - generic [ref=e617]: Cable Drop Clips
              - generic [ref=e618]: Min. 50% Off
          - link "Image Mobile Skin Stickers Min. 50% Off" [ref=e623] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-0e2734d716610eebc089bedc830dd662/pr?sid=tyy%2C4mr%2Cmr4%2C00w&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e633]
            - generic [ref=e636]:
              - generic [ref=e637]: Mobile Skin Stickers
              - generic [ref=e638]: Min. 50% Off
      - generic [ref=e650]:
        - generic [ref=e651]:
          - link "Image Credit Card" [ref=e656] [cursor=pointer]:
            - /url: https://www.flipkart.com/fpg/cbc/store-page?productType=CC&utm_source=Allcat_OTA&utm_source_context=Allcat_nav&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkNyZWRpdCBDYXJkIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e659]
            - generic [ref=e660]: Credit Card
          - link "Image EMI" [ref=e665] [cursor=pointer]:
            - /url: https://www.flipkart.com/rv/fpg/cfa/ntb/ce?emiType=cfa-term-loan&productCode=CREDIT_MARKETPLACE&utmSource=ADS&utmContext=FKEMI_Nav&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkVNSSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e668]
            - generic [ref=e669]: EMI
          - link "Image Pay Later" [ref=e674] [cursor=pointer]:
            - /url: https://www.flipkart.com/rv/fpg/bnpl?utmSource=fk-fpl107&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlBheSBMYXRlciJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e677]
            - generic [ref=e678]: Pay Later
          - link "Image 2 Wheelers" [ref=e683] [cursor=pointer]:
            - /url: /7dk/0aj/~cs-l0abbrtwvr/pr?sid=7dk%2C0aj&collection-tab-name=Top+Deals+on+Bikes+and+Scooters&pageCriteria=default&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIjIgV2hlZWxlcnMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e686]
            - generic [ref=e687]: 2 Wheelers
          - link "Image Loans" [ref=e692] [cursor=pointer]:
            - /url: https://www.flipkart.com/sumo-3p/pl/pages/journey?utm_source=Home_Page&utm_campaign=Nav_Base&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkxvYW5zIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e695]
            - generic [ref=e696]: Loans
          - link "Image Gift Cards" [ref=e701] [cursor=pointer]:
            - /url: /gift-card-at-store?param=7654567&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkdpZnQgQ2FyZHMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e704]
            - generic [ref=e705]: Gift Cards
          - link "Image Sell Phone" [ref=e710] [cursor=pointer]:
            - /url: /reset-sell-store?param=3382&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNlbGwgUGhvbmUiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e713]
            - generic [ref=e714]: Sell Phone
          - link "Image SuperCoin" [ref=e719] [cursor=pointer]:
            - /url: /supercoin?param=76523&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlN1cGVyQ29pbiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e722]
            - generic [ref=e723]: SuperCoin
          - link "Image BLACK" [ref=e728] [cursor=pointer]:
            - /url: /flipkart-black-store?param=389440&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkJMQUNLIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e731]
            - generic [ref=e732]: BLACK
          - link "Image Pay" [ref=e737] [cursor=pointer]:
            - /url: /flipkart-pay-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlBheSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e740]
            - generic [ref=e741]: Pay
          - link "Image For GenZ" [ref=e746] [cursor=pointer]:
            - /url: /ls-spl-26-gen-z-men-nonline-at-store?param=236896932&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZvciBHZW5aIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e749]
            - generic [ref=e750]: For GenZ
          - link "Image Originals" [ref=e755] [cursor=pointer]:
            - /url: /flipkart-originals-large-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk9yaWdpbmFscyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e758]
            - generic [ref=e759]: Originals
          - link "Image Vouchers" [ref=e764] [cursor=pointer]:
            - /url: /bv1-gift-card-at-store?param=4264&pageUID=1791823084665&param=787193&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlZvdWNoZXJzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e767]
            - generic [ref=e768]: Vouchers
          - link "Image Next Gen" [ref=e773] [cursor=pointer]:
            - /url: /nextgen-brands-spl-store?param=7478&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk5leHQgR2VuIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e776]
            - generic [ref=e777]: Next Gen
        - button [ref=e778]:
          - img [ref=e779]
      - generic [ref=e790]:
        - generic [ref=e794]:
          - img "Image" [ref=e797]
          - generic [ref=e801]: Top Value Deals
        - generic [ref=e806]:
          - generic [ref=e807]:
            - link "Image" [ref=e813] [cursor=pointer]:
              - /url: /product/p/itme?pid=AFRHMWUMVTNB2CDW&BU=Mixed
              - img "Image" [ref=e822]
            - link "Image" [ref=e828] [cursor=pointer]:
              - /url: /home-furnishing/cushions-pillows/pillows/~cs-nna77x3pzv/pr?sid=jra%2Ckzv%2C3bw&collection-tab-name=Pillow&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&param=7687&BU=Mixed
              - img "Image" [ref=e837]
            - link "Image" [ref=e843] [cursor=pointer]:
              - /url: /womens-footwear/~cs-l9ww3f51j0/pr?sid=osp%2Ciko%2Ciz7&collection-tab-name=Footwear-Womenslippers&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D199&param=5454&BU=Mixed
              - img "Image" [ref=e852]
            - link "Image" [ref=e858] [cursor=pointer]:
              - /url: /building-materials-and-supplies/bathroom-and-kitchen-fittings/shower-systems/~cs-gxa7ao7ba1/pr?sid=b8s%2Cecr%2Ccqb&collection-tab-name=Shower+system&BU=Mixed
              - img "Image" [ref=e867]
            - link "Image" [ref=e873] [cursor=pointer]:
              - /url: /home-improvement-tools/home-utilities-and-organizers/laundry/~cs-ndyjl5cs6p/pr?sid=h1m%2Ciee%2C3a7&collection-tab-name=Laundry+bag+365+new&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&param=7654&BU=Mixed
              - img "Image" [ref=e882]
            - link "Image" [ref=e888] [cursor=pointer]:
              - /url: /product/p/itme?pid=AFRHMW9492V2YBSC&BU=Mixed
              - img "Image" [ref=e897]
            - link "Image" [ref=e903] [cursor=pointer]:
              - /url: /all/~cs-gx820m32ny/pr?sid=all&collection-tab-name=Breakfast+Needs&BU=Mixed&experience=hv&BU=Mixed
              - img "Image" [ref=e912]
            - link "Image" [ref=e918] [cursor=pointer]:
              - /url: /necklaces-chains/~cs-tcjwhdh58i/pr?sid=mcr%2C96v%2C0vq&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D499&offer=vl%3A05a8940617&BU=Mixed
              - img "Image" [ref=e927]
            - link "Image" [ref=e933] [cursor=pointer]:
              - /url: /jhg/yqn/feb/~cs-v60ba33wj0/pr?sid=jhg%2Cyqn%2Cfeb&collection-tab-name=INVERTER+BULBS&param=75421&BU=Mixed
              - img "Image" [ref=e942]
            - link "Image" [ref=e948] [cursor=pointer]:
              - /url: /product/p/itme?pid=WAPH8AGATJSZXXYG&BU=Mixed
              - img "Image" [ref=e957]
          - button [ref=e958]:
            - img [ref=e959]
      - generic [ref=e970]:
        - generic [ref=e974]: Brands in Spotlight
        - link "Image" [ref=e975] [cursor=pointer]:
          - /url: /gaming-products/~cs-xspf17dzs1/pr?sid=4rr&collection-tab-name=Sony+&sort=price_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=OM2Y4D1ZBUK5_AD&BU=Mixed
          - img "Image" [ref=e981]
      - link "Image" [ref=e992] [cursor=pointer]:
        - /url: /g9b/~cs-fa3hws5xcw/pr?sid=g9b&collection-tab-name=Clean+clear&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=AOPHW2MZ3ILA_AD&BU=Mixed
        - img "Image" [ref=e998]
      - generic [ref=e1008]:
        - generic [ref=e1015]: Popular nearby
        - generic [ref=e1018]:
          - link "Image Shop Now! Under ₹199" [ref=e1023] [cursor=pointer]:
            - /url: /clo/qfl/~cs-f80fesihmf/pr?sid=clo%2Cqfl&collection-tab-name=Bra%2C+Panty%2C+Lingerie+set&p%5B%5D=facets.ideal_for%255B%255D%3DWomen&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D199&param=3456&hpid=WR-JP5FwW5Tvtr5AQ0VdsKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrkxOTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJCUkFISlc0R0tLQ1M4OENVIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiQnJhLHBhbnR5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e1033]
            - generic [ref=e1036]:
              - generic [ref=e1037]: Shop Now!
              - generic [ref=e1038]: Under ₹199
          - link "Image boAt, realme, Mivi & more Buy Now!" [ref=e1043] [cursor=pointer]:
            - /url: /audio-video/headset/pr?sid=0pm%2Cfcn&p%5B%5D=facets.connectivity%255B%255D%3DBluetooth&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D1499&hpid=5TMxUngDAbKGfRIWoeK2z6p7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJCdXkgTm93ISJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkFDQ0dTOVpNR1FaSDRGWkYiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJCbHVldG9vdGggSGVhZHBob25lcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e1053]
            - generic [ref=e1056]:
              - generic [ref=e1057]: boAt, realme, Mivi & more
              - generic [ref=e1058]: Buy Now!
          - link "Image Best Offers Under ₹299" [ref=e1063] [cursor=pointer]:
            - /url: /clothing-and-accessories/kids-combos-and-costumes/kids-apparel-combos/pr?sid=clo%2Ceof%2C1bp&p%5B%5D=facets.ideal_for%255B%255D%3DGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BGirls&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D299&param=43675&hpid=U2ogDgFXTOZSl7YWKtwYX6p7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrkyOTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJLUEJIRzc2Nk1HR0dIQk02IiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiS2lkcycgY29tYm9zZXRzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e1073]
            - generic [ref=e1076]:
              - generic [ref=e1077]: Best Offers
              - generic [ref=e1078]: Under ₹299
          - link "Image women's Sandals... Min 50% Off" [ref=e1083] [cursor=pointer]:
            - /url: /womens-footwear/pr?sid=osp%2Ciko&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&p%5B%5D=facets.brand%255B%255D%3DMETRO&p%5B%5D=facets.brand%255B%255D%3DMOCHI&param=41&hpid=u78Zyu67SAHPYo9OPe7Cqqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4gNTAlIE9mZiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlNGRkcyVkJaQUVSSEZHRlIiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJNZXRybyAmIE1vY2hpIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e1093]
            - generic [ref=e1096]:
              - generic [ref=e1097]: women's Sandals...
              - generic [ref=e1098]: Min 50% Off
      - generic [ref=e1108]:
        - generic [ref=e1112]:
          - img "Image" [ref=e1115]
          - generic [ref=e1117]:
            - generic [ref=e1119]: Best Gadgets & Appliances
            - link [ref=e1120] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_1%7Emarketplace%3DFLIPKART%7EwidgetType%3DdealCardV3%7EcontentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e1123]
        - generic [ref=e1127]:
          - link "Image Bikes & Scooters Special offer" [ref=e1132] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-e9a7af9a13271add16a2ebb0ba329fea/pr?sid=7dk%2C0aj&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1142]
            - generic [ref=e1145]:
              - generic [ref=e1146]: Bikes & Scooters
              - generic [ref=e1147]: Special offer
          - link "Image Shavers Min. 50% Off" [ref=e1152] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6f73066a691d71e2948a4b66ea1864fc/pr?sid=zlw%2C79s%2Cu3j&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1162]
            - generic [ref=e1165]:
              - generic [ref=e1166]: Shavers
              - generic [ref=e1167]: Min. 50% Off
          - link "Image Trimmers Min. 50% Off" [ref=e1172] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-fcd986f0a357ac4dbc7f91b70631e4b1/pr?sid=zlw%2C79s%2Cby3&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1182]
            - generic [ref=e1185]:
              - generic [ref=e1186]: Trimmers
              - generic [ref=e1187]: Min. 50% Off
          - link "Image Gaming Laptops Special offer" [ref=e1192] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-e5bf65b5e35993f5247b836aeef41f53/pr?sid=4rr%2Ctz1&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1202]
            - generic [ref=e1205]:
              - generic [ref=e1206]: Gaming Laptops
              - generic [ref=e1207]: Special offer
      - generic [ref=e1211]: Hang on, loading content
      - generic [ref=e1223]:
        - generic [ref=e1224]: Flipkart - Your go-to place for Online Shopping
        - generic [ref=e1225]: +
      - contentinfo [ref=e1226]:
        - generic [ref=e1228]:
          - generic [ref=e1229]:
            - generic [ref=e1230]:
              - generic [ref=e1231]: ABOUT
              - link "Contact Us" [ref=e1232] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
              - link "About Us" [ref=e1233] [cursor=pointer]:
                - /url: https://corporate.flipkart.net/corporate-home
              - link "Careers" [ref=e1234] [cursor=pointer]:
                - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
              - link "Flipkart Stories" [ref=e1235] [cursor=pointer]:
                - /url: http://stories.flipkart.com/?otracker=footer_navlinks
              - link "Press" [ref=e1236] [cursor=pointer]:
                - /url: http://stories.flipkart.com/category/top-stories/news/
              - link "Corporate Information" [ref=e1237] [cursor=pointer]:
                - /url: /corporate-information
            - generic [ref=e1238]:
              - generic [ref=e1239]: GROUP COMPANIES
              - link "Myntra" [ref=e1240] [cursor=pointer]:
                - /url: https://www.myntra.com/
              - link "Cleartrip" [ref=e1241] [cursor=pointer]:
                - /url: https://www.cleartrip.com/
              - link "Shopsy" [ref=e1242] [cursor=pointer]:
                - /url: https://www.shopsy.in
            - generic [ref=e1243]:
              - generic [ref=e1244]: HELP
              - link "Payments" [ref=e1245] [cursor=pointer]:
                - /url: /pages/payments
              - link "Shipping" [ref=e1246] [cursor=pointer]:
                - /url: /pages/shipping
              - link "Cancellation & Returns" [ref=e1247] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
              - link "FAQ" [ref=e1248] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
            - generic [ref=e1249]:
              - generic [ref=e1250]: CONSUMER POLICY
              - link "Cancellation & Returns" [ref=e1251] [cursor=pointer]:
                - /url: /pages/returnpolicy?otracker=footer_navlinks
              - link "Terms Of Use" [ref=e1252] [cursor=pointer]:
                - /url: /pages/terms?otracker=footer_navlinks
              - link "Security" [ref=e1253] [cursor=pointer]:
                - /url: /pages/paymentsecurity?otracker=footer_navlinks
              - link "Privacy" [ref=e1254] [cursor=pointer]:
                - /url: /pages/privacypolicy?otracker=footer_navlinks
              - link "Sitemap" [ref=e1255] [cursor=pointer]:
                - /url: /sitemap?otracker=footer_navlinks
              - link "Grievance Redressal" [ref=e1256] [cursor=pointer]:
                - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
              - link "EPR Compliance" [ref=e1257] [cursor=pointer]:
                - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
              - link "FSSAI Food Safety Connect App" [ref=e1258] [cursor=pointer]:
                - /url: https://fssai.gov.in/cms/food-safety-connect.php
            - generic [ref=e1259]:
              - generic [ref=e1260]: "Mail Us:"
              - generic [ref=e1261]:
                - paragraph [ref=e1262]: Flipkart Internet Private Limited,
                - paragraph [ref=e1263]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1264]: Clove Embassy Tech Village,
                - paragraph [ref=e1265]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1266]: Bengaluru, 560103,
                - paragraph [ref=e1267]: Karnataka, India
              - generic [ref=e1268]: "Social:"
              - generic [ref=e1269]:
                - link "Facebook" [ref=e1271] [cursor=pointer]:
                  - /url: https://www.facebook.com/flipkart
                  - img "Facebook" [ref=e1272]
                - link "Twitter" [ref=e1274] [cursor=pointer]:
                  - /url: https://www.twitter.com/flipkart
                  - img "Twitter" [ref=e1275]
                - link "YouTube" [ref=e1277] [cursor=pointer]:
                  - /url: https://www.youtube.com/flipkart
                  - img "YouTube" [ref=e1278]
                - link "Instagram" [ref=e1280] [cursor=pointer]:
                  - /url: https://www.instagram.com/flipkart
                  - img "Instagram" [ref=e1281]
            - generic [ref=e1282]:
              - generic [ref=e1283]: "Registered Office Address:"
              - generic [ref=e1284]:
                - paragraph [ref=e1285]: Flipkart Internet Private Limited,
                - paragraph [ref=e1286]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1287]: Clove Embassy Tech Village,
                - paragraph [ref=e1288]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1289]: Bengaluru, 560103,
                - paragraph [ref=e1290]: Karnataka, India
                - paragraph [ref=e1291]: "CIN : U51109KA2012PTC066107"
                - paragraph
                - paragraph [ref=e1292]:
                  - text: "Telephone:"
                  - link "044-45614700" [ref=e1293] [cursor=pointer]:
                    - /url: tel:044-45614700
                  - text: /
                  - link "044-67415800" [ref=e1294] [cursor=pointer]:
                    - /url: tel:044-67415800
          - generic [ref=e1295]:
            - generic [ref=e1296]:
              - img "Become a Seller" [ref=e1297]
              - link "Become a Seller" [ref=e1298] [cursor=pointer]:
                - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
            - generic [ref=e1299]:
              - img "Advertise" [ref=e1300]
              - generic "Advertise" [ref=e1301]
            - generic [ref=e1302]:
              - img "Gift Cards" [ref=e1303]
              - link "Gift Cards" [ref=e1304] [cursor=pointer]:
                - /url: /the-gift-card-store?otracker=footer_navlinks
            - generic [ref=e1305]:
              - img "Help Center" [ref=e1306]
              - link "Help Center" [ref=e1307] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
            - generic [ref=e1308]: © 2007-2026 Flipkart.com
            - img "Payment methods"
  - contentinfo
```

# Test source

```ts
  1  | 
  2  | 
  3  | import {test,expect} from  "@playwright/test"
  4  | 
  5  | 
  6  | test("Without config file",async({page})=>{
  7  | 
  8  | 
  9  |     await page.goto("https://flights.qedgetech.com/")
  10 | 
  11 | 
  12 | })
  13 | 
  14 | // async function test1(){
  15 | 
  16 | //     return "Hello"
  17 | 
  18 | // }
  19 | // test1().then(result => console.log(result))
  20 | 
  21 | // console.log(add(10, 20));
  22 | 
  23 | // function add(a, b) {
  24 | //   return a + b;
  25 | // }
  26 | 
  27 | 
  28 | 
  29 | 
  30 | test("saucedemo",async ({page})=>{
  31 | 
  32 | 
  33 |     await page.goto("https://www.saucedemo.com/")
  34 | 
  35 |     const innertext=await page.locator(".login_credentials").innerText()
  36 | 
  37 | 
  38 |     console.log("TExt is:"+ innertext)
  39 | 
  40 |     
  41 |     // const textcontent=await page.locator(".login_credentials").textContent()
  42 | 
  43 | 
  44 |     // console.log("TExt  content isis:"+ textcontent)
  45 | 
  46 | 
  47 |     const userAray= innertext.split("\n").slice(1)
  48 |     console.log(userAray)
  49 | 
  50 | 
  51 |     const firstUser= userAray[0]
  52 | 
  53 | 
  54 |     await page.locator("#user-name").fill(firstUser)
  55 |     await page.waitForTimeout(2000)
  56 | })
  57 | 
  58 | 
  59 | test.only("Flipkart",async ({page})=>{
  60 | 
  61 | 
> 62 |     await page.goto("https://www.flipkart.com/")
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  63 | 
  64 |   
  65 |     await page.locator("input[name='q']").first().fill("laptop")
  66 |     await page.keyboard.press("Enter")
  67 |     await page.waitForTimeout(2000)
  68 | 
  69 | 
  70 |     const PRoductCards= await page.locator(".jIjQ8S")
  71 | 
  72 |     const PRoductCount= await PRoductCards.count()
  73 | 
  74 |     console.log("Count is:"+ PRoductCount)
  75 | 
  76 | 
  77 | })
```