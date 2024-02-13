const express = require('express');

const router = express.Router();

//Post request for adding items to cart
router.post('/cart/products', async (req, res) => {
  console.log(req.body.productId);

  res.send('prodcuts added to cart')
})
module.exports = router