const productRepository = require("./repository");

exports.createProduct = async (req, res) => {
    try {
        let payload = {
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity
        }

        let product = await productRepository.createProduct({
            ...payload
        });
        res.status(200).json({
            status: true,
            data: product
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
            status: false
        })
    }
}

exports.getProducts = async (req, res) => {
    try {
        let products = await productRepository.products();
        res.status(200).json({
            status: true,
            data: products
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
            status: false
        })
    }
}

exports.getProductById = async (req, res) => {
    try {
        let id = req.params.id;
        let productDetails = await productRepository.productById(id);
        res.status(200).json({
            status: true,
            data: productDetails
        }) 
    } catch (err) {
        res.status(500).json({
            error: err,
            status: false
        })
    }
}

exports.removeProduct = async (req, res) => {
    try {
        let id = req.params.id;
        let productDetails = await productRepository.removeProduct(id);
        res.status(200).json({
            status: true,
            data: productDetails
        }) 
    } catch (err) {
        res.status(500).json({
            error: err,
            status: false
        })
    }
}