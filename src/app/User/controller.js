const userRepository = require("./repository");
const cartRepository = require("../Cart/repository");

exports.createUser = async (req, res) => {
    try {
        let payload = {
            username: req.body.username,
            email: req.body.email,
        };
        let user = await userRepository.createUser({
            ...payload
        });
        
        // Initializing cart after registering the user

        let newCartPayload = {
            userId: user._id,
            items: [],
            subTotal: 0
        };
        let cart = await cartRepository.createCart({
            ...newCartPayload
        });

        res.status(200).json({
            status: true,
            data: [user, cart]
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
            status: false
        });
    }
}