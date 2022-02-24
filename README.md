# van_amazon_scapper

Create a NodeJS Express backend server for scraping Amazon data using ScraperAPI service https://www.scraperapi.com/

- Scraper URL: https://van-amazon-scraper.herokuapp.com/

## Note: Add the parameter api_key using your Scraper api key

- For example: https://van-amazon-scraper.herokuapp.com/search/phone?api_key=82hr8w389r7fysnefg37r9ujf983

## Endpoint:

### Search for product

/search/:searchProduct

### GET product detail

/products/:productId

### GET product peviews

/products/:productId/reviews

### GET product offers

/products/:productId/offers

### More information: https://www.scraperapi.com/documentation/
