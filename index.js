const express = require('express')
const request = require('request-promise')

const app = express()
const PORT = process.env.PORT || 5000
const generateBaseUrl = (apiKey)=> `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;


app.use(express.json())

app.get('/',(req,res)=> {
    res.sendFile('./instruction.html',{root:__dirname})
})

// GET Product detail
app.get('/products/:productId/',async (req,res)=> {
    const {productId} = req.params;
    const {api_key} = req.query
    try {
        const response = await request(`${generateBaseUrl(api_key)}&url=https://www.amazon.com/dp/${productId}`);
        res.json(JSON.parse(response))

    } catch (error) {
        res.json(error)

    }
})

// GET Product Reviews

app.get('/products/:productId/reviews',async (req,res)=> {
    const {productId} = req.params;
    const {api_key} = req.query
    try {
        const response = await request(`${generateBaseUrl(api_key)}&url=https://www.amazon.com/product-reviews/${productId}`);    
        res.json(JSON.parse(response))

    } catch (error) {
        res.json(error)

    }
})

// GET Product Offers

app.get('/products/:productId/offers',async (req,res)=> {
    const {productId} = req.params;
    const {api_key} = req.query
    try {
        const response = await request(`${generateBaseUrl(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`);    
        res.json(JSON.parse(response))

    } catch (error) {
        res.json(error)

    }
})

// Search for product

app.get('/search/:searchProduct',async (req,res)=> {
    const {searchProduct} = req.params;
    const {api_key} = req.query
    try {
        const response = await request(`${generateBaseUrl(api_key)}&url=https://www.amazon.com/s?k=${searchProduct}`);    
        res.json(JSON.parse(response))

    } catch (error) {
        res.json(error)

    }
})



app.listen(PORT,()=>console.log(`Server is runing on ${PORT}`))
