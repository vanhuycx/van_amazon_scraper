# van_amazon_scapper

Create a NodeJS Express backend server for scraping Amazon data using ScraperAPI service https://www.scraperapi.com/

- Scraper URL: https://van-amazon-scraper.herokuapp.com/

## Endpoint:

### Search for product

/search/:searchProduct

### GET product detail

/products/:productId

### GET product peviews

/products/:productId/reviews

### GET product offers

/products/:productId/offers

## Note: Add the parameter api_key using your Scraper api key

- For example: https://van-amazon-scraper.herokuapp.com/search/phone?api_key=82hr8w389r7fysnefg37r9ujf983
  - Example output:
  ![Screenshot (303)](https://user-images.githubusercontent.com/69407832/155435134-2eec9b8c-be60-491a-b8db-8c26f80b8a59.png)
  
### More information: https://www.scraperapi.com/documentation/




