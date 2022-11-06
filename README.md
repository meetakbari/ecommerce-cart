# E-commerce cart functionality

## Supported Functionality:
+ One can create a user account.
+ User can add/remove a product to the cart.
+ User can view cart-items of his/her cart.
+ Sub-total of the cart and stock of product is updated when product added/removed to/from user's cart.

## Data Models:
### User
- id
- username
- email
- createdAt
- updatedAt

### Product
- id 
- name
- price
- quantity
- createdAt
- updatedAt

### Cart
- userId
- items [
    productId,
    quantity,
    price,
    total
]
- subTotal
- createdAt
- updatedAt

## API END-PONITS
### For User Actions 
1. Create user [POST: `/api/v1/users`] [Body-JSON: username, email]
2. Get all users [GET: `/api/v1/users`]

### For Product Actions 
1. Create a product [POST: `/api/v1/products`] [Body-JSON: name, price, quantity]
2. Get all products [GET: `/api/v1/products`] 
3. Get a product by Id [GET: `/api/v1/products/:productId`] 
4. Delete a product by Id [DELETE: `/api/v1/products/:productId`] 

### For Cart Actions
1. Add a product to cart [POST: `/api/v1/cart/`] [Body-JSON: userId, productId, quantity]
2. View cart of a user [GET: `/api/v1/cart/:userId`] 
3. Remove a product from cart [DELETE: `/api/v1/cart/:userId`] [Body-JSON: productId]



