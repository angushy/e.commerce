const Cart = require("../models/Carts");
const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");

const router = require("express").Router();

//UPDATE
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body)
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err)
  }
})

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    }, { new: true })
    //update
    res.status(200).json(updatedCart);
    //err
  } catch (err) { res.status(500), json(err) };

});

//FIND Cart
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;