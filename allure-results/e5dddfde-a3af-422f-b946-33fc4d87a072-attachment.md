# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Sample4.spec.js >> Flipkart
- Location: tests\Sample4.spec.js:59:6

# Error details

```
Error: locator.fill: Error: strict mode violation: locator('//input[@name=\'q\']') resolved to 2 elements:
    1) <input name="q" value="" type="text" autocomplete="off" class="nw1UBF v1zwn26" title="Search for Products, Brands and More" placeholder="Search for Products, Brands and More"/> aka getByRole('textbox', { name: 'Search for Products, Brands' })
    2) <input readonly name="q" value="" type="text" autocomplete="off" class="nw1UBF v1zwn26" title="Search for Products, Brands and More" placeholder="Search for Products, Brands and More"/> aka locator('a').filter({ hasText: 'Search Icon' }).getByPlaceholder('Search for Products, Brands')

Call log:
  - waiting for locator('//input[@name=\'q\']')

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
          - generic [ref=e84]:
            - generic [ref=e86]:
              - link "Login" [ref=e87] [cursor=pointer]:
                - /url: /login?ret=/
                - img "Login" [ref=e88]
                - generic [ref=e89]: Login
              - img "Chevron" [ref=e90]
            - link "Login" [ref=e94] [cursor=pointer]:
              - /url: /login?ret=/
          - generic [ref=e99]:
            - link "More" [ref=e100] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e101]: More
            - img "Chevron" [ref=e102]
          - link "Cart Cart" [ref=e105] [cursor=pointer]:
            - /url: /viewcart?marketplace=FLIPKART
            - img "Cart" [ref=e106]
            - generic [ref=e107]: Cart
      - generic [ref=e109]:
        - link "For You" [ref=e114] [cursor=pointer]:
          - /url: https://www.flipkart.com/
          - generic [ref=e116]:
            - img [ref=e119]
            - heading "For You" [level=1] [ref=e120]
        - link "Fashion" [ref=e125] [cursor=pointer]:
          - /url: /ss-26-base-inline-at-store
          - generic [ref=e127]:
            - img [ref=e130]
            - generic [ref=e131]: Fashion
        - link "Mobiles" [ref=e136] [cursor=pointer]:
          - /url: /mobile-phones-store
          - generic [ref=e138]:
            - img [ref=e141]
            - generic [ref=e142]: Mobiles
        - link "Electronics" [ref=e147] [cursor=pointer]:
          - /url: /new-elec-clp-march-at-store
          - generic [ref=e149]:
            - img [ref=e152]
            - generic [ref=e153]: Electronics
        - link "Beauty" [ref=e158] [cursor=pointer]:
          - /url: /bpc-bau-new-inline-at-store
          - generic [ref=e160]:
            - img [ref=e163]
            - generic [ref=e164]: Beauty
        - link "Home" [ref=e169] [cursor=pointer]:
          - /url: /home-kitchen-25-at-store
          - generic [ref=e171]:
            - img [ref=e174]
            - generic [ref=e175]: Home
        - link "Appliances" [ref=e180] [cursor=pointer]:
          - /url: /tv-and-appliances-inline-ab-at-store
          - generic [ref=e182]:
            - img [ref=e185]
            - generic [ref=e186]: Appliances
        - link "Toys, baby.." [ref=e191] [cursor=pointer]:
          - /url: /toysbc-new26-inline-at-store
          - generic [ref=e193]:
            - img [ref=e196]
            - generic [ref=e197]: Toys, baby..
        - link "Food & Health" [ref=e202] [cursor=pointer]:
          - /url: /fnhc-2025-new-at-store
          - generic [ref=e204]:
            - img [ref=e207]
            - generic [ref=e208]: Food & Health
        - link "Auto Accessories" [ref=e213] [cursor=pointer]:
          - /url: /aa-2025-new-at-store
          - generic [ref=e215]:
            - img [ref=e218]
            - generic [ref=e219]: Auto Accessories
        - link "Sports & Fitness" [ref=e224] [cursor=pointer]:
          - /url: /sf-inline-2025-at-store
          - generic [ref=e226]:
            - img [ref=e229]
            - generic [ref=e230]: Sports & Fitness
        - link "Furniture" [ref=e235] [cursor=pointer]:
          - /url: /india-ka-furniture-studio-inlines-at-store
          - generic [ref=e237]:
            - img [ref=e240]
            - generic [ref=e241]: Furniture
        - link "Books" [ref=e246] [cursor=pointer]:
          - /url: /books-at-store
          - generic [ref=e248]:
            - img [ref=e251]
            - generic [ref=e252]: Books
        - link "2 Wheelers" [ref=e257] [cursor=pointer]:
          - /url: /twowheelers-at-store
          - generic [ref=e259]:
            - img [ref=e262]
            - generic [ref=e263]: 2 Wheelers
    - generic [ref=e271]:
      - generic [ref=e286]:
        - link "Image" [ref=e293] [cursor=pointer]:
          - /url: /mens-footwear/pr?sid=osp%2Ccil%2Ce83&p%5B%5D=facets.brand%255B%255D%3Daadi&p%5B%5D=facets.brand%255B%255D%3DBERSACHE&p%5B%5D=facets.brand%255B%255D%3DBirde&p%5B%5D=facets.brand%255B%255D%3DFAUSTO&p%5B%5D=facets.brand%255B%255D%3DVellinto&p%5B%5D=facets.brand%255B%255D%3DBRUTON&p%5B%5D=facets.brand%255B%255D%3DSvaar&p%5B%5D=facets.brand%255B%255D%3DKoburg&p%5B%5D=facets.brand%255B%255D%3DCHIPS&p%5B%5D=facets.brand%255B%255D%3DCassiey&p%5B%5D=facets.brand%255B%255D%3DEVOK&p%5B%5D=facets.brand%255B%255D%3DFabbmate&p%5B%5D=facets.brand%255B%255D%3DFeather%2BLeather&p%5B%5D=facets.brand%255B%255D%3DFootox&p%5B%5D=facets.brand%255B%255D%3DK%2527%2BFootlance&p%5B%5D=facets.brand%255B%255D%3DKhadim%2527s&p%5B%5D=facets.brand%255B%255D%3DKolapuri&p%5B%5D=facets.brand%255B%255D%3DKraasa&p%5B%5D=facets.brand%255B%255D%3DLayasa&p%5B%5D=facets.brand%255B%255D%3DKzaara&p%5B%5D=facets.brand%255B%255D%3DOrtho%2B%252B%2BRest&p%5B%5D=facets.brand%255B%255D%3DPampy%2BAngel&p%5B%5D=facets.brand%255B%255D%3DWELCOME&p%5B%5D=facets.brand%255B%255D%3DDOCTOR%2BEXTRA%2BSOFT&p%5B%5D=facets.brand%255B%255D%3DCogs&p%5B%5D=facets.brand%255B%255D%3DDr%2BPlus&p%5B%5D=facets.brand%255B%255D%3DDRACKFOOT&p%5B%5D=facets.brand%255B%255D%3DKapani%2BFashion&p%5B%5D=facets.brand%255B%255D%3DNOBELITE&p%5B%5D=facets.brand%255B%255D%3DRowlans&p%5B%5D=facets.brand%255B%255D%3DBonkerz&p%5B%5D=facets.brand%255B%255D%3DTrendmode&p%5B%5D=facets.brand%255B%255D%3DNeoz&p%5B%5D=facets.brand%255B%255D%3DLehar&p%5B%5D=facets.brand%255B%255D%3DLakhani&p%5B%5D=facets.brand%255B%255D%3DKolhapuri&p%5B%5D=facets.brand%255B%255D%3Ddensity&p%5B%5D=facets.brand%255B%255D%3DDelize&p%5B%5D=facets.brand%255B%255D%3DDELEFS&p%5B%5D=facets.brand%255B%255D%3DBOLTAGO&p%5B%5D=facets.brand%255B%255D%3DBOTOWI&p%5B%5D=facets.brand%255B%255D%3DBrawo&p%5B%5D=facets.brand%255B%255D%3Dbrighto&p%5B%5D=facets.brand%255B%255D%3DAeonik&p%5B%5D=facets.brand%255B%255D%3DAeroFast&p%5B%5D=facets.brand%255B%255D%3DACCENTOR&p%5B%5D=facets.brand%255B%255D%3DEL%2BPASO&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D299&param=2093485&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=DHVMFAUO7H0B_IAD&BU=Mixed
          - img "Image" [ref=e296]
        - link "Image" [ref=e303] [cursor=pointer]:
          - /url: /apple-iphone-17-white-256-gb/p/itm68ad8410784c7?pid=MOBHQV9YAZYYWY8A&param=299921&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=NF11GDID73UM_IAD&BU=Mixed
          - img "Image" [ref=e306]
        - link "Image" [ref=e313] [cursor=pointer]:
          - /url: /mivi-one-5g-green-128-gb/p/itm7c374475b93cf?pid=MOBHR3ZP7PRKEXUP&marketplace=FLIPKART&lid=LSTMOBHR3ZP7PRKEXUPKQQIR0&pageUID=1792249741149&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=VDF6HESRUYU5_AD&BU=Mixed
          - img "Image" [ref=e316]
        - link "Image" [ref=e323] [cursor=pointer]:
          - /url: /ray-ban-meta-wayfarer-gen-2/p/itm86ccc99e2b26c?pid=SGAHGKBZGEJSDH9B&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=B10PQ1NQPF3P_AD&BU=Mixed
          - img "Image" [ref=e326]
        - link "Image" [ref=e333] [cursor=pointer]:
          - /url: /audio-video/~cs-rewe7vcr1b/pr?sid=0pm&collection-tab-name=Best+of+Mivi+Sounbars&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=YWAV5NXYCX23_AD&BU=Mixed
          - img "Image" [ref=e336]
        - link "Image" [ref=e343] [cursor=pointer]:
          - /url: /audio-video/headset/earphones/wireless-earphones/true-wireless/pr?sid=0pm%2Cfcn%2C821%2Ca7x%2C2si&p%5B%5D=facets.features%255B%255D%3DNoise%2BCancellation&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=DPX2K3DUKF6M_IAD&BU=Mixed
          - img "Image" [ref=e346]
        - link "Image" [ref=e353] [cursor=pointer]:
          - /url: /beauty-and-grooming/~cs-d0n3hrxrq5/pr?sid=g9b&collection-tab-name=neem+facewash&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=LOP0OCEAM9HY_AD&BU=Mixed
          - img "Image" [ref=e356]
        - link "Image" [ref=e363] [cursor=pointer]:
          - /url: /samsung-galaxy-f70-5g-vivid-violet-128-gb/p/itmcc1028703e31e?pid=MOBHRV4XYK4GZGHQ&marketplace=FLIPKART&lid=LSTMOBHRV4XYK4GZGHQNMOQ4E&pageUID=1792342047874&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=AJXBTXT8W7IP_AD&BU=Mixed
          - img "Image" [ref=e366]
        - link "Image" [ref=e373] [cursor=pointer]:
          - /url: /mens-footwear/pr?sid=osp%2Ccil&otracker=nmenu_sub_Men_0_Footwear&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&p%5B%5D=facets.brand%255B%255D%3DADIDAS&param=209&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=N4BIBZVFMWQX_AD&BU=Mixed
          - img "Image" [ref=e376]
        - link "Image" [ref=e383] [cursor=pointer]:
          - /url: /mens-footwear/pr?sid=osp%2Ccil&otracker=nmenu_sub_Men_0_Footwear&p%5B%5D=facets.brand%255B%255D%3DAsics&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&param=291&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=Y4OPKQXNAVQA_AD&BU=Mixed
          - img "Image" [ref=e386]
      - generic [ref=e409]:
        - link "Image" [ref=e414] [cursor=pointer]:
          - /url: /footwear/~cs-gmy0hn5crp/pr?sid=osp&collection-tab-name=Woodland&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&param=841&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=CHJ10JQDOTYA_AD&BU=Mixed
          - img "Image" [ref=e417]
        - link "Image" [ref=e422] [cursor=pointer]:
          - /url: /mens-footwear/pr?sid=osp%2Ccil&otracker=nmenu_sub_Men_0_Footwear&p%5B%5D=facets.brand%255B%255D%3DADIDAS&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&param=762&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=UBMZ778LGLA7_AD&BU=Mixed
          - img "Image" [ref=e425]
        - link "Image" [ref=e430] [cursor=pointer]:
          - /url: /beauty-and-grooming/~cs-g2d42aobkr/pr?sid=g9b&collection-tab-name=JOY&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=UU10NVC79IEP_AD&BU=Mixed
          - img "Image" [ref=e433]
      - generic [ref=e443]:
        - generic [ref=e447]:
          - img "Image" [ref=e450]
          - generic [ref=e452]:
            - generic [ref=e454]: Must-have Electronics & Appliances
            - link [ref=e455] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_5%7Emarketplace%3DFLIPKART%7EwidgetType%3DdealCardV3%7EcontentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e458]
        - generic [ref=e462]:
          - link "Image Mobile Body Panels Min. 50% Off" [ref=e467] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-68acdcc00524bb405486423ab89d4b18/pr?sid=tyy%2C4mr%2Cukk&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e477]
            - generic [ref=e480]:
              - generic [ref=e481]: Mobile Body Panels
              - generic [ref=e482]: Min. 50% Off
          - link "Image Power Banks Min. 50% Off" [ref=e487] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-5447acab9094df30966ed1ae80389723/pr?sid=tyy%2C4mr%2Cfu6&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e497]
            - generic [ref=e500]:
              - generic [ref=e501]: Power Banks
              - generic [ref=e502]: Min. 50% Off
          - link "Image Cable Drop Clips Min. 50% Off" [ref=e507] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-71f65676322c7d1a64b48629790e01f6/pr?sid=tyy%2C4mr%2Cxel&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e517]
            - generic [ref=e520]:
              - generic [ref=e521]: Cable Drop Clips
              - generic [ref=e522]: Min. 50% Off
          - link "Image Mobile Skin Stickers Min. 50% Off" [ref=e527] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-0e2734d716610eebc089bedc830dd662/pr?sid=tyy%2C4mr%2Cmr4%2C00w&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e537]
            - generic [ref=e540]:
              - generic [ref=e541]: Mobile Skin Stickers
              - generic [ref=e542]: Min. 50% Off
      - generic [ref=e552]:
        - generic [ref=e559]: Popular nearby
        - generic [ref=e562]:
          - link "Image Top Sellers Under ₹199" [ref=e567] [cursor=pointer]:
            - /url: /all/~cs-451859278ff35c6b146333736d054fb6/pr?sid=4rr%2Ckm5%2Cipq&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrkxOTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJwcmljZV9yYW5nZSI6eyJyYW5nZVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJwcmljZV9yYW5nZSIsImluZmVyZW5jZVR5cGUiOiJGQUNFVCIsIm1pbiI6bnVsbCwibWF4IjoxOTkuMCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJBQ0NIWlNTRktKRVZRWjVZIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiQ2FzZXMgJiBDb3ZlcnMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e577]
            - generic [ref=e580]:
              - generic [ref=e581]: Top Sellers
              - generic [ref=e582]: Under ₹199
          - link "Image Top Deals Special offer" [ref=e587] [cursor=pointer]:
            - /url: /all/~cs-b56c9f69ce8873bcad18c81c51d8d80e/pr?sid=eat%2Cltb%2Coen&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTcGVjaWFsIG9mZmVyIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiTWl4ZWQgRHJ5IEZydWl0cyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6Ik5ERkhSM1o1UFFHOVNRUVAiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e597]
            - generic [ref=e600]:
              - generic [ref=e601]: Top Deals
              - generic [ref=e602]: Special offer
          - link "Image Casual Trousers Flat 70% Off" [ref=e607] [cursor=pointer]:
            - /url: /all/~cs-72e06511a1642134e166f992356f5404/pr?sid=clo%2Cvua%2Cmle%2Clhk&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGbGF0IDcwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJUUk9HVjUyR0dDVkJEVUhLIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwiZGlzY291bnRfcmFuZ2VfdjEiOnsicmFuZ2VWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoiZGlzY291bnRfcmFuZ2VfdjEiLCJpbmZlcmVuY2VUeXBlIjoiRkFDRVQiLCJtaW4iOjcwLjAsIm1heCI6bnVsbCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJEb24ndCBNaXNzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e617]
            - generic [ref=e620]:
              - generic [ref=e621]: Casual Trousers
              - generic [ref=e622]: Flat 70% Off
          - link "Image Most-loved Coffee" [ref=e627] [cursor=pointer]:
            - /url: /all/~cs-69941d8e9630dccc686954070b9b19b1/pr?sid=eat%2Cltb%2Cngb&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJDb2ZmZWUiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJOREZHVVhRQUpUMlJRN1BNIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e637]
            - generic [ref=e640]:
              - generic [ref=e641]: Most-loved
              - generic [ref=e642]: Coffee
      - generic [ref=e654]:
        - generic [ref=e655]:
          - link "Image Credit Card" [ref=e660] [cursor=pointer]:
            - /url: https://www.flipkart.com/fpg/cbc/store-page?productType=CC&utm_source=Allcat_OTA&utm_source_context=Allcat_nav&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkNyZWRpdCBDYXJkIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e663]
            - generic [ref=e664]: Credit Card
          - link "Image EMI" [ref=e669] [cursor=pointer]:
            - /url: https://www.flipkart.com/rv/fpg/cfa/ntb/ce?emiType=cfa-term-loan&productCode=CREDIT_MARKETPLACE&utmSource=ADS&utmContext=FKEMI_Nav&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkVNSSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e672]
            - generic [ref=e673]: EMI
          - link "Image Pay Later" [ref=e678] [cursor=pointer]:
            - /url: https://www.flipkart.com/rv/fpg/bnpl?utmSource=fk-fpl107&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlBheSBMYXRlciJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e681]
            - generic [ref=e682]: Pay Later
          - link "Image 2 Wheelers" [ref=e687] [cursor=pointer]:
            - /url: /7dk/0aj/~cs-l0abbrtwvr/pr?sid=7dk%2C0aj&collection-tab-name=Top+Deals+on+Bikes+and+Scooters&pageCriteria=default&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIjIgV2hlZWxlcnMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e690]
            - generic [ref=e691]: 2 Wheelers
          - link "Image Loans" [ref=e696] [cursor=pointer]:
            - /url: https://www.flipkart.com/sumo-3p/pl/pages/journey?utm_source=Home_Page&utm_campaign=Nav_Base&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkxvYW5zIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e699]
            - generic [ref=e700]: Loans
          - link "Image Gift Cards" [ref=e705] [cursor=pointer]:
            - /url: /gift-card-at-store?param=7654567&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkdpZnQgQ2FyZHMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e708]
            - generic [ref=e709]: Gift Cards
          - link "Image Sell Phone" [ref=e714] [cursor=pointer]:
            - /url: /reset-sell-store?param=3382&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNlbGwgUGhvbmUiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e717]
            - generic [ref=e718]: Sell Phone
          - link "Image SuperCoin" [ref=e723] [cursor=pointer]:
            - /url: /supercoin?param=76523&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlN1cGVyQ29pbiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e726]
            - generic [ref=e727]: SuperCoin
          - link "Image BLACK" [ref=e732] [cursor=pointer]:
            - /url: /flipkart-black-store?param=389440&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkJMQUNLIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e735]
            - generic [ref=e736]: BLACK
          - link "Image Pay" [ref=e741] [cursor=pointer]:
            - /url: /flipkart-pay-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlBheSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e744]
            - generic [ref=e745]: Pay
          - link "Image For GenZ" [ref=e750] [cursor=pointer]:
            - /url: /ls-spl-26-gen-z-men-nonline-at-store?param=236896932&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZvciBHZW5aIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e753]
            - generic [ref=e754]: For GenZ
          - link "Image Originals" [ref=e759] [cursor=pointer]:
            - /url: /flipkart-originals-large-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk9yaWdpbmFscyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e762]
            - generic [ref=e763]: Originals
          - link "Image Vouchers" [ref=e768] [cursor=pointer]:
            - /url: /bv1-gift-card-at-store?param=4264&pageUID=1791823084665&param=787193&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlZvdWNoZXJzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e771]
            - generic [ref=e772]: Vouchers
          - link "Image Next Gen" [ref=e777] [cursor=pointer]:
            - /url: /nextgen-brands-spl-store?param=7478&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk5leHQgR2VuIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e780]
            - generic [ref=e781]: Next Gen
        - button [ref=e782]:
          - img [ref=e783]
      - generic [ref=e794]:
        - generic [ref=e798]:
          - img "Image" [ref=e801]
          - generic [ref=e805]: Top Value Deals
        - generic [ref=e810]:
          - generic [ref=e811]:
            - link "Image" [ref=e817] [cursor=pointer]:
              - /url: /jhg/6w8/rws/~cs-1erp5d79ye/pr?sid=jhg%2C6w8%2Crws&collection-tab-name=Ceiling+lamp&param=8765&BU=Mixed
              - img "Image" [ref=e826]
            - link "Image" [ref=e832] [cursor=pointer]:
              - /url: /product/p/itme?pid=AFRHPYY8MZZZSYUJ&BU=Mixed
              - img "Image" [ref=e841]
            - link "Image" [ref=e847] [cursor=pointer]:
              - /url: /health-care/~cs-qrs5z73to8/pr?sid=hlc&collection-tab-name=Bestsellers&valueid=vl%3A05a8940617&sort=recency_desc&p%5B%5D=facets.brand%255B%255D%3DYogabar&param=448292&BU=Mixed
              - img "Image" [ref=e856]
            - link "Image" [ref=e862] [cursor=pointer]:
              - /url: /womens-kurtas-kurtis/~cs-rane5fp5s6/pr?sid=clo%2Ccfv%2Ccib%2Crkt&collection-tab-name=Premium+Kurtis&p%5B%5D=facets.discount_range_v1%255B%255D%3D70%2525%2Bor%2Bmore&param=9876223&BU=Mixed
              - img "Image" [ref=e871]
            - link "Image" [ref=e877] [cursor=pointer]:
              - /url: /beauty-and-grooming/womens-personal-hygiene/sanitary-pad/~cs-u42glt58p9/pr?sid=g9b%2Ciph%2Cjth&p%5B%5D=facets.discount_range_v1%255B%255D%3D30%2525%2Bor%2Bmore&experience=hv&pageUID=1784559239890&BU=Mixed
              - img "Image" [ref=e886]
            - link "Image" [ref=e892] [cursor=pointer]:
              - /url: /product/p/itme?pid=WAPH8AGATJSZXXYG&BU=Mixed
              - img "Image" [ref=e901]
            - link "Image" [ref=e907] [cursor=pointer]:
              - /url: /clothing-and-accessories/bottomwear/cargos/~cs-5o17exth2l/pr?sid=clo%2Cvua%2Crqy&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D450&sort=price_desc&param=12344&BU=Mixed
              - img "Image" [ref=e916]
            - link "Image" [ref=e922] [cursor=pointer]:
              - /url: /furniture/~cs-ibbnv9n9c1/pr?sid=wwe&collection-tab-name=Collapsible+wardrobe&param=79831&BU=Mixed
              - img "Image" [ref=e931]
            - link "Image" [ref=e937] [cursor=pointer]:
              - /url: /watches/~cs-3rmsw1tlkr/pr?sid=r18&collection-tab-name=Watches&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D149&offer=vl%3A05a8940617&BU=Mixed
              - img "Image" [ref=e946]
            - link "Image" [ref=e952] [cursor=pointer]:
              - /url: /all/~cs-8in9ivgw1v/pr?sid=all&collection-tab-name=Toys+and+more+deals+value+365+phase6&valueid=vl%3A05a890617&param=86578889&BU=Mixed
              - img "Image" [ref=e961]
            - link "Image" [ref=e967] [cursor=pointer]:
              - /url: /product/p/itme?pid=MIXGGHMCGVWQZ3PU&BU=Mixed
              - img "Image" [ref=e976]
            - link "Image" [ref=e982] [cursor=pointer]:
              - /url: /product/p/itme?pid=EKTG8KXH7ZFCZ8HW&BU=Mixed
              - img "Image" [ref=e991]
            - link "Image" [ref=e997] [cursor=pointer]:
              - /url: /all/~cs-gx820m32ny/pr?sid=all&collection-tab-name=Breakfast+Needs&BU=Mixed&experience=hv&BU=Mixed
              - img "Image" [ref=e1006]
            - link "Image" [ref=e1012] [cursor=pointer]:
              - /url: /furniture/~cs-ibw2itl1eo/pr?sid=wwe&collection-tab-name=Office+chairs&param=75629&BU=Mixed
              - img "Image" [ref=e1021]
            - link "Image" [ref=e1027] [cursor=pointer]:
              - /url: /furniture/~cs-mv7squlwrj/pr?sid=wwe&collection-tab-name=Side+table&param=78421&BU=Mixed
              - img "Image" [ref=e1036]
          - button [ref=e1037]:
            - img [ref=e1038]
      - generic [ref=e1049]:
        - generic [ref=e1053]: Brands in Spotlight
        - link "Image" [ref=e1054] [cursor=pointer]:
          - /url: /mens-footwear/~cs-1vcqlkc3uv/pr?sid=osp%2Ccil&collection-tab-name=Men%27s+Footwear&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=ORNOYF0BMHE6_AD&BU=Mixed
          - img "Image" [ref=e1060]
      - link "Image" [ref=e1071] [cursor=pointer]:
        - /url: /clothing-and-accessories/~cs-phjqwarqow/pr?sid=clo&collection-tab-name=Men%27s+clothing&p%5B%5D=facets.brand%255B%255D%3DAllen%2BSolly&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=IZPKGCS10TRN_AD&BU=Mixed
        - img "Image" [ref=e1077]
      - generic [ref=e1087]:
        - generic [ref=e1094]: People also viewed
        - generic [ref=e1097]:
          - link "Image Milton, Cello & more From ₹129" [ref=e1102] [cursor=pointer]:
            - /url: /kitchen-cookware-serveware/water-bottles-flasks/pr?sid=upp%2C3t7&marketplace=FLIPKART&sort=popularity&p%5B%5D=facets.price_range.from%3D129&p%5B%5D=facets.price_range.to%3DMax&hpid=uBvWEo4NUmh0PT8_4P0PDap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTEyOSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkJPVEU2UFVWNFFXRkdIUVoiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJXYXRlciBCb3R0bGVzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e1112]
            - generic [ref=e1115]:
              - generic [ref=e1116]: Milton, Cello & more
              - generic [ref=e1117]: From ₹129
          - link "Image Comfy Feels From ₹199" [ref=e1122] [cursor=pointer]:
            - /url: /mens-footwear/mens-sports-shoes/pr?sid=osp%2Ccil%2C1cu&p%5B%5D=facets.brand%255B%255D%3DWELDONE&sort=popularity&p%5B%5D=facets.brand%255B%255D%3DHOTSTYLE&p%5B%5D=facets.brand%255B%255D%3DBRUTON&p%5B%5D=facets.brand%255B%255D%3DCOOPERWINGS&p%5B%5D=facets.brand%255B%255D%3DFree%2BKicks&p%5B%5D=facets.brand%255B%255D%3Djootiyapa&p%5B%5D=facets.brand%255B%255D%3DPennen&p%5B%5D=facets.brand%255B%255D%3DBOKZZON&p%5B%5D=facets.brand%255B%255D%3DSPOTWALK&p%5B%5D=facets.brand%255B%255D%3DWINGSCRAFT&p%5B%5D=facets.brand%255B%255D%3DTrendmode&p%5B%5D=facets.brand%255B%255D%3DANGO&p%5B%5D=facets.brand%255B%255D%3DBirde&p%5B%5D=facets.brand%255B%255D%3DPennon&p%5B%5D=facets.brand%255B%255D%3DLNT%2BFASHION&p%5B%5D=facets.brand%255B%255D%3Dhouse%2Bof%2Bcommon&p%5B%5D=facets.brand%255B%255D%3DHotspot&p%5B%5D=facets.brand%255B%255D%3DDRACKFOOT&p%5B%5D=facets.brand%255B%255D%3DSKYMORE&p%5B%5D=facets.brand%255B%255D%3DNOBELITE&p%5B%5D=facets.brand%255B%255D%3Daadi&p%5B%5D=facets.brand%255B%255D%3DCamfoot&p%5B%5D=facets.brand%255B%255D%3DURBANBOX&p%5B%5D=facets.brand%255B%255D%3DLEATHERKRAFT&p%5B%5D=facets.brand%255B%255D%3DWorld%2BWear%2BFootwear&p%5B%5D=facets.brand%255B%255D%3DCALCADOS&p%5B%5D=facets.brand%255B%255D%3DSender&p%5B%5D=facets.brand%255B%255D%3DAxter&p%5B%5D=facets.brand%255B%255D%3DGREVON&p%5B%5D=facets.brand%255B%255D%3DJut%2BFire&p%5B%5D=facets.brand%255B%255D%3DRoamra&p%5B%5D=facets.brand%255B%255D%3DSCLERE&p%5B%5D=facets.brand%255B%255D%3DSHOEFLY&p%5B%5D=facets.brand%255B%255D%3DAircum&p%5B%5D=facets.brand%255B%255D%3DA-CLASS&p%5B%5D=facets.brand%255B%255D%3DROASTER&p%5B%5D=facets.brand%255B%255D%3DKANEGGYE&p%5B%5D=facets.brand%255B%255D%3DJOSMOS&p%5B%5D=facets.brand%255B%255D%3DGenial&p%5B%5D=facets.brand%255B%255D%3DBegone&p%5B%5D=facets.brand%255B%255D%3DMagnolia&p%5B%5D=facets.brand%255B%255D%3DELASA&p%5B%5D=facets.brand%255B%255D%3DRoyal%2BCruzz&p%5B%5D=facets.brand%255B%255D%3DWALKAROO&p%5B%5D=facets.brand%255B%255D%3DKzaara&p%5B%5D=facets.brand%255B%255D%3DFootox&p%5B%5D=facets.brand%255B%255D%3DEarton&p%5B%5D=facets.brand%255B%255D%3Dontour&p%5B%5D=facets.brand%255B%255D%3DStride%2BUp&p%5B%5D=facets.brand%255B%255D%3DTR&p%5B%5D=facets.brand%255B%255D%3DTying&p%5B%5D=facets.brand%255B%255D%3DWOCMEC&p%5B%5D=facets.brand%255B%255D%3DVECHLO&p%5B%5D=facets.brand%255B%255D%3DWtrizak&p%5B%5D=facets.brand%255B%255D%3Dazalya&p%5B%5D=facets.brand%255B%255D%3DSIMATA&p%5B%5D=facets.brand%255B%255D%3DRapidBox&p%5B%5D=facets.brand%255B%255D%3DM7%2BBy%2BMetronaut&p%5B%5D=facets.brand%255B%255D%3DLANCER&p%5B%5D=facets.brand%255B%255D%3DDUNKASTON&p%5B%5D=facets.brand%255B%255D%3DFLIPJONES&p%5B%5D=facets.brand%255B%255D%3DDanma&p%5B%5D=facets.brand%255B%255D%3DGroofer&p%5B%5D=facets.brand%255B%255D%3DK%2527%2BFootlance&p%5B%5D=facets.brand%255B%255D%3DAirland&p%5B%5D=facets.brand%255B%255D%3DAirhype&p%5B%5D=facets.brand%255B%255D%3DAanbaan&p%5B%5D=facets.price_range.from%3D199&p%5B%5D=facets.price_range.to%3DMax&param=5678&hpid=wgejo3JDi7bbNElSUoI2uKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTE5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlNIT0hCWUNBR0ZYOVNEM1AiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJTcG9ydHkgc2hvZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e1132]
            - generic [ref=e1135]:
              - generic [ref=e1136]: Comfy Feels
              - generic [ref=e1137]: From ₹199
          - link "Image boAt, realme, Mivi & more Min 50% Off" [ref=e1142] [cursor=pointer]:
            - /url: /audio-video/pr?sid=0pm&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&hpid=w2BGimYwATZXfn_vEkn1oap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4gNTAlIE9mZiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkFDQ0dTOVpNR1FaSDRGWkYiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJCZXN0IE9mIEhlYWRwaG9uZXMgJiBTcGVha2VycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e1152]
            - generic [ref=e1155]:
              - generic [ref=e1156]: boAt, realme, Mivi & more
              - generic [ref=e1157]: Min 50% Off
          - link "Image Deal of the Day From ₹99" [ref=e1162] [cursor=pointer]:
            - /url: /watches/wrist-watches/pr?sid=r18%2Cf13&p%5B%5D=facets.price_range.from%3D99&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.brand%255B%255D%3DShocknshop&p%5B%5D=facets.brand%255B%255D%3DCurren&p%5B%5D=facets.brand%255B%255D%3DWristy&p%5B%5D=facets.brand%255B%255D%3DFOGG&p%5B%5D=facets.brand%255B%255D%3DCHARLIEKEEN&p%5B%5D=facets.brand%255B%255D%3DLOUIS%2BDEVIN&p%5B%5D=facets.brand%255B%255D%3Dluxurit&p%5B%5D=facets.brand%255B%255D%3DLOIS%2BCARON&p%5B%5D=facets.brand%255B%255D%3DANALOGUE&p%5B%5D=facets.brand%255B%255D%3DRUSTET&p%5B%5D=facets.brand%255B%255D%3DAcnos&p%5B%5D=facets.brand%255B%255D%3DIIK%2BCollection&p%5B%5D=facets.brand%255B%255D%3DIIK%2BCollections&p%5B%5D=facets.brand%255B%255D%3DPROVOGUE&p%5B%5D=facets.brand%255B%255D%3DMATRIX&p%5B%5D=facets.brand%255B%255D%3DTime%2BMatrix&p%5B%5D=facets.brand%255B%255D%3DKILLER&p%5B%5D=facets.brand%255B%255D%3DPIRASO&p%5B%5D=facets.brand%255B%255D%3DEDDY%2BHAGER&p%5B%5D=facets.brand%255B%255D%3DLIMESTONE&p%5B%5D=facets.brand%255B%255D%3DLORENZ&p%5B%5D=facets.brand%255B%255D%3DSKMEI&p%5B%5D=facets.brand%255B%255D%3DTIMEWEAR&p%5B%5D=facets.brand%255B%255D%3DCasado&p%5B%5D=facets.brand%255B%255D%3DMETRONAUT&p%5B%5D=facets.brand%255B%255D%3DM7%2BBy%2BMetronaut&p%5B%5D=facets.brand%255B%255D%3DABREXO&p%5B%5D=facets.brand%255B%255D%3DSeptem&p%5B%5D=facets.brand%255B%255D%3DNAVlFORCE&p%5B%5D=facets.brand%255B%255D%3DNAVIFORCE&p%5B%5D=facets.brand%255B%255D%3DOVERFLY&p%5B%5D=facets.brand%255B%255D%3DNIBOSI&p%5B%5D=facets.brand%255B%255D%3DV2A&p%5B%5D=facets.brand%255B%255D%3DAlix&p%5B%5D=facets.brand%255B%255D%3DKitcone&p%5B%5D=facets.brand%255B%255D%3DLongbo&p%5B%5D=facets.brand%255B%255D%3DBruno%2BMilano&p%5B%5D=facets.brand%255B%255D%3DBENYAR&p%5B%5D=facets.brand%255B%255D%3DSylvi&p%5B%5D=facets.brand%255B%255D%3DBenling&p%5B%5D=facets.brand%255B%255D%3DOLEVS&p%5B%5D=facets.brand%255B%255D%3DYHMEI&param=768787&hpid=_LEB_oDVnnx6rheeL0HHXap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiV0FUSDhGUU5ZRUJEUlNZSCIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIldhdGNoZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e1172]
            - generic [ref=e1175]:
              - generic [ref=e1176]: Deal of the Day
              - generic [ref=e1177]: From ₹99
      - generic [ref=e1187]:
        - generic [ref=e1191]:
          - img "Image" [ref=e1194]
          - generic [ref=e1196]:
            - generic [ref=e1198]: Best Gadgets & Appliances
            - link [ref=e1199] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_1%7Emarketplace%3DFLIPKART%7EwidgetType%3DdealCardV3%7EcontentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e1202]
        - generic [ref=e1206]:
          - link "Image Bikes & Scooters Special offer" [ref=e1211] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-e9a7af9a13271add16a2ebb0ba329fea/pr?sid=7dk%2C0aj&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1221]
            - generic [ref=e1224]:
              - generic [ref=e1225]: Bikes & Scooters
              - generic [ref=e1226]: Special offer
          - link "Image Shavers Min. 50% Off" [ref=e1231] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6f73066a691d71e2948a4b66ea1864fc/pr?sid=zlw%2C79s%2Cu3j&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1241]
            - generic [ref=e1244]:
              - generic [ref=e1245]: Shavers
              - generic [ref=e1246]: Min. 50% Off
          - link "Image Trimmers Min. 50% Off" [ref=e1251] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-fcd986f0a357ac4dbc7f91b70631e4b1/pr?sid=zlw%2C79s%2Cby3&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1261]
            - generic [ref=e1264]:
              - generic [ref=e1265]: Trimmers
              - generic [ref=e1266]: Min. 50% Off
          - link "Image Gaming Laptops Special offer" [ref=e1271] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-e5bf65b5e35993f5247b836aeef41f53/pr?sid=4rr%2Ctz1&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1281]
            - generic [ref=e1284]:
              - generic [ref=e1285]: Gaming Laptops
              - generic [ref=e1286]: Special offer
      - generic [ref=e1290]: Hang on, loading content
      - generic [ref=e1302]:
        - generic [ref=e1303]: Flipkart - Your go-to place for Online Shopping
        - generic [ref=e1304]: +
      - contentinfo [ref=e1305]:
        - generic [ref=e1307]:
          - generic [ref=e1308]:
            - generic [ref=e1309]:
              - generic [ref=e1310]: ABOUT
              - link "Contact Us" [ref=e1311] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
              - link "About Us" [ref=e1312] [cursor=pointer]:
                - /url: https://corporate.flipkart.net/corporate-home
              - link "Careers" [ref=e1313] [cursor=pointer]:
                - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
              - link "Flipkart Stories" [ref=e1314] [cursor=pointer]:
                - /url: http://stories.flipkart.com/?otracker=footer_navlinks
              - link "Press" [ref=e1315] [cursor=pointer]:
                - /url: http://stories.flipkart.com/category/top-stories/news/
              - link "Corporate Information" [ref=e1316] [cursor=pointer]:
                - /url: /corporate-information
            - generic [ref=e1317]:
              - generic [ref=e1318]: GROUP COMPANIES
              - link "Myntra" [ref=e1319] [cursor=pointer]:
                - /url: https://www.myntra.com/
              - link "Cleartrip" [ref=e1320] [cursor=pointer]:
                - /url: https://www.cleartrip.com/
              - link "Shopsy" [ref=e1321] [cursor=pointer]:
                - /url: https://www.shopsy.in
            - generic [ref=e1322]:
              - generic [ref=e1323]: HELP
              - link "Payments" [ref=e1324] [cursor=pointer]:
                - /url: /pages/payments
              - link "Shipping" [ref=e1325] [cursor=pointer]:
                - /url: /pages/shipping
              - link "Cancellation & Returns" [ref=e1326] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
              - link "FAQ" [ref=e1327] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
            - generic [ref=e1328]:
              - generic [ref=e1329]: CONSUMER POLICY
              - link "Cancellation & Returns" [ref=e1330] [cursor=pointer]:
                - /url: /pages/returnpolicy?otracker=footer_navlinks
              - link "Terms Of Use" [ref=e1331] [cursor=pointer]:
                - /url: /pages/terms?otracker=footer_navlinks
              - link "Security" [ref=e1332] [cursor=pointer]:
                - /url: /pages/paymentsecurity?otracker=footer_navlinks
              - link "Privacy" [ref=e1333] [cursor=pointer]:
                - /url: /pages/privacypolicy?otracker=footer_navlinks
              - link "Sitemap" [ref=e1334] [cursor=pointer]:
                - /url: /sitemap?otracker=footer_navlinks
              - link "Grievance Redressal" [ref=e1335] [cursor=pointer]:
                - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
              - link "EPR Compliance" [ref=e1336] [cursor=pointer]:
                - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
              - link "FSSAI Food Safety Connect App" [ref=e1337] [cursor=pointer]:
                - /url: https://fssai.gov.in/cms/food-safety-connect.php
            - generic [ref=e1338]:
              - generic [ref=e1339]: "Mail Us:"
              - generic [ref=e1340]:
                - paragraph [ref=e1341]: Flipkart Internet Private Limited,
                - paragraph [ref=e1342]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1343]: Clove Embassy Tech Village,
                - paragraph [ref=e1344]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1345]: Bengaluru, 560103,
                - paragraph [ref=e1346]: Karnataka, India
              - generic [ref=e1347]: "Social:"
              - generic [ref=e1348]:
                - link "Facebook" [ref=e1350] [cursor=pointer]:
                  - /url: https://www.facebook.com/flipkart
                  - img "Facebook" [ref=e1351]
                - link "Twitter" [ref=e1353] [cursor=pointer]:
                  - /url: https://www.twitter.com/flipkart
                  - img "Twitter" [ref=e1354]
                - link "YouTube" [ref=e1356] [cursor=pointer]:
                  - /url: https://www.youtube.com/flipkart
                  - img "YouTube" [ref=e1357]
                - link "Instagram" [ref=e1359] [cursor=pointer]:
                  - /url: https://www.instagram.com/flipkart
                  - img "Instagram" [ref=e1360]
            - generic [ref=e1361]:
              - generic [ref=e1362]: "Registered Office Address:"
              - generic [ref=e1363]:
                - paragraph [ref=e1364]: Flipkart Internet Private Limited,
                - paragraph [ref=e1365]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1366]: Clove Embassy Tech Village,
                - paragraph [ref=e1367]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1368]: Bengaluru, 560103,
                - paragraph [ref=e1369]: Karnataka, India
                - paragraph [ref=e1370]: "CIN : U51109KA2012PTC066107"
                - paragraph
                - paragraph [ref=e1371]:
                  - text: "Telephone:"
                  - link "044-45614700" [ref=e1372] [cursor=pointer]:
                    - /url: tel:044-45614700
                  - text: /
                  - link "044-67415800" [ref=e1373] [cursor=pointer]:
                    - /url: tel:044-67415800
          - generic [ref=e1374]:
            - generic [ref=e1375]:
              - img "Become a Seller" [ref=e1376]
              - link "Become a Seller" [ref=e1377] [cursor=pointer]:
                - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
            - generic [ref=e1378]:
              - img "Advertise" [ref=e1379]
              - generic "Advertise" [ref=e1380]
            - generic [ref=e1381]:
              - img "Gift Cards" [ref=e1382]
              - link "Gift Cards" [ref=e1383] [cursor=pointer]:
                - /url: /the-gift-card-store?otracker=footer_navlinks
            - generic [ref=e1384]:
              - img "Help Center" [ref=e1385]
              - link "Help Center" [ref=e1386] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
            - generic [ref=e1387]: © 2007-2026 Flipkart.com
            - img "Payment methods"
  - contentinfo
  - generic [ref=e1389]:
    - button "✕" [ref=e1390] [cursor=pointer]
    - generic [ref=e1393]:
      - generic [ref=e1394]: Login
      - paragraph [ref=e1395]: Get access to your Orders, Wishlist and Recommendations
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
  62 |     await page.goto("https://www.flipkart.com/")
  63 | 
  64 |   
> 65 |     await page.locator("//input[@name='q']").fill("laptop")
     |                                              ^ Error: locator.fill: Error: strict mode violation: locator('//input[@name=\'q\']') resolved to 2 elements:
  66 |     await page.keyboard.press("Enter")
  67 |     await page.waitForTimeout(2000)
  68 | })
```