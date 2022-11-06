const router = require("express").Router();

const cartController = require("./controller");

// add a product to the cart for userId=id
router.post("/", cartController.addItemToCart);
// get cart details of userId=id
router.get("/:id", cartController.viewCart);
// delete productId(passed in body) for userId=id
router.delete("/:id", cartController.removeFromCart);
// empty entire cart of userId=id
// router.delete("/empty-cart/:id", cartController.emptyCart);

module.exports = router;